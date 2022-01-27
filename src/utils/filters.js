export function getFilter(field, operator, value) {
    switch (operator) {
      case '=':
      case 'isEmpty':
      case 'equals':
        return {
          field,
          op: 'eq',
          value
        };
      case '!=':
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
          value
        };
      case '>=':
        return {
          field,
          op: 'gte',
          value
        };
      case '<':
        return {
          field,
          op: 'lt',
          value
        };
      case '<=':
        return {
          field,
          op: 'lte',
          value
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
            op: 'ne',
            value: true
          };
        } else if (value === 'false') {
          return {
            field,
            op: 'ne',
            value: false
          };
        } else {
          return {
            field,
            op: 'eq',
            value: new Date(value)
          };
        }
      case 'not':
        return {
          field,
          op: 'ne',
          value: new Date(value)
        };
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