import moment from 'moment';

function strToNumber(str) {
  return Number(str);
}

export function getFilter(field, operator, value) {
  console.log(operator)
  switch (operator) {
    case '=':
      if (!value) {
        return {
          field,
          op: 'ne',
          value
        };
      } else {
        return {
          field,
          op: 'eq',
          value: strToNumber(value)
        };
      }
    case 'isEmpty':
    case 'equals':
      return {
        field,
        op: 'eq',
        value
      };
    case '!=':
      return {
        field,
        op: 'ne',
        value: strToNumber(value)
      };
    case 'isNotEmpty':
      return {
        field,
        op: 'ne',
        value
      };
    case '>':
      return {
        field,
        op: 'gt',
        value: strToNumber(value)
      };
    case '>=':
      return {
        field,
        op: 'gte',
        value: strToNumber(value)
      };
    case '<':
      return {
        field,
        op: 'lt',
        value: strToNumber(value)
      };
    case '<=':
      return {
        field,
        op: 'lte',
        value: strToNumber(value)
      };
    case 'isAnyOf':
      return {
        field,
        op: 'in',
        value
      };
    case 'contains':
      return {
        field,
        op: 'regex',
        value
      };
    case 'startsWith':
      return {
        field,
        op: 'regex',
        value: '^' + value
      };
    case 'endsWith':
      return {
        field,
        op: 'eq',
        value: value + '$'
      };
    case 'is':
      if (!value) {
        return {
          field,
          op: 'ne',
          value
        };
      } else if (value === 'true') {
        return {
          field,
          op: 'eq',
          value: true
        };
      } else if (value === 'false') {
        return {
          field,
          op: 'eq',
          value: false
        };
      } else {
        const d = moment(value, moment.ISO_8601, true);
        return {
          field,
          op: 'eq',
          value: d.isValid() ? d.toDate() : value
        };
      }
    case 'not': {
      const d = moment(value, moment.ISO_8601, true);
      return {
        field,
        op: 'ne',
        value: d.isValid() ? d.toDate() : value
      };
    }
    case 'after':
      return {
        field,
        op: 'gt',
        value: new Date(value)
      };
    case 'onOrAfter':
      return {
        field,
        op: 'gte',
        value: new Date(value)
      };
    case 'before':
      return {
        field,
        op: 'lt',
        value: new Date(value)
      };
    case 'onOrBefore':
      return {
        field,
        op: 'lte',
        value: new Date(value)
      };
    case 'default':
      return {
        field,
        op: 'eq',
        value
      };
  }
}
