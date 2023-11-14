import {
    dateFNS,
    dateFNSLocales,
    DAY_OF_WEEK_FORMATTING,
    DAY_OF_WEEK_FORMATTING_CHAR,
    DAY_OF_MONTH,
    CALENDAR_YEAR,
    MONTH_FORMATTING,
} from '@driponfleek/bankai-lib-date-time-utils';

const { MONTH_FULL, MONTH_ABBREVIATED } = MONTH_FORMATTING;
const { YEAR_FULL } = CALENDAR_YEAR;
const { DAY_OF_MONTH_NUMBER, DAY_OF_MONTH_NUMBER_LEADING_ZERO } = DAY_OF_MONTH;
const { DAY_OF_WEEK_FULL_NAME } = DAY_OF_WEEK_FORMATTING;

const { format: formatDate, parse: parseDate, addYears } = dateFNS;
const endOfDecade = (date) => addYears(date, 10);
const endOfCentury = (date) => addYears(date, 100);
const {
    enUS: enLocale,
    es: spanishLocale,
    zhTW: chineseLocale,
} = dateFNSLocales;

// Default Formats
const headerFormat = `${MONTH_FULL} ${YEAR_FULL}`;
const weekdayFormat = `${DAY_OF_WEEK_FORMATTING_CHAR}${DAY_OF_WEEK_FORMATTING_CHAR}${DAY_OF_WEEK_FORMATTING_CHAR}${DAY_OF_WEEK_FORMATTING_CHAR}${DAY_OF_WEEK_FORMATTING_CHAR}${DAY_OF_WEEK_FORMATTING_CHAR}`;

export const locales = {
    en_US: enLocale,
    es_ES: spanishLocale,
    zh_TW: chineseLocale,
};

export const defaultFormats = {
    // date: 'dddd, MMMM D, YYYY',
    date: `${DAY_OF_WEEK_FULL_NAME}, ${MONTH_FULL} ${DAY_OF_MONTH_NUMBER}, ${YEAR_FULL}`,
    // time: 'HH:mm:ss',
    // default: 'dddd, MMMM D, YYYY',
    default: `${DAY_OF_WEEK_FULL_NAME}, ${MONTH_FULL} ${DAY_OF_MONTH_NUMBER}, ${YEAR_FULL}`,
    // header: 'MMMM YYYY',
    header: headerFormat,
    // footer: 'dddd, MMMM D, YYYY',
    // weekday: 'dd',
    weekday: weekdayFormat,
    // dayOfMonth: 'DD',
    dayOfMonth: DAY_OF_MONTH_NUMBER_LEADING_ZERO,
    // month: 'MMM',
    month: MONTH_ABBREVIATED,
    // year: 'YYYY',
    year: YEAR_FULL,
};

export default class RWDateLocalizer {
    locale = enLocale;

    formats = defaultFormats;

    constructor(config) {
        const { locales: configLocales, formats } = config || {};
        const { language: browserLocale } = navigator || {};

        if (formats) {
            this.formats = formats;
        }

        if (configLocales && browserLocale) {
            this.locale = configLocales[browserLocale] || enLocale;
        }
    }

    format = (value, format) => {
        return formatDate(value, format, { locale: this.locale });
    };

    firstOfWeek = () => {
        const { options } = this.locale || {};
        const { weekStartsOn } = options || {};

        return weekStartsOn || 0;
    };

    formattedValue = (date, format, fallbackFormat) => {
        return this.format(date, format || fallbackFormat);
    };

    date = (date, format) => {
        return this.formattedValue(date, format, this.formats.date);
    };

    time = (date, format) => {
        return this.formattedValue(date, format, 'pp');
    };

    datetime = (date, format) => {
        return this.formattedValue(date, format, 'Pp');
    };

    header = (date, format) => {
        return this.formattedValue(date, format, this.formats.header);
    };

    weekday = (date, format) => {
        return this.formattedValue(date, format, this.formats.weekday);
    };

    dayOfMonth = (date, format) => {
        return this.formattedValue(date, format, this.formats.dayOfMonth);
    };

    month = (date, format) => {
        return this.formattedValue(date, format, this.formats.month);
    };

    year = (date, format) => {
        return this.formattedValue(date, format, this.formats.year);
    };

    decade = (date, format) => {
        if (format) {
            return this.formattedValue(date, format);
        }

        return `${this.formattedValue(
            date,
            format,
            YEAR_FULL,
        )} - ${this.formattedValue(endOfDecade(date), format, YEAR_FULL)}`;
    };

    century = (date, format) => {
        if (format) {
            return this.formattedValue(date, format);
        }

        return `${this.formattedValue(
            date,
            format,
            YEAR_FULL,
        )} - ${this.formattedValue(endOfCentury(date), format, YEAR_FULL)}`;
    };

    parse = (value, format) => {
        const result = parseDate(new Date(), format, value, {
            locale: this.locale,
        });

        if (result.toString() === 'Invalid Date') {
            return undefined;
        }

        return result;
    };
}
