export const formatPrice = ({value, currency}: {value: number, currency: string}) => {
    const locale = 'uk-UA';
    let formattedValue = new Intl.NumberFormat(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  
    // Кастомная обработка для разных валют
    if (currency === 'USD') {
      return `${formattedValue} $` ; // Для долларов добавляем символ $
    } else if (currency === 'UAH') {
      return `${formattedValue} грн`; // Для гривен добавляем грн
    } else {
      return formattedValue;
    }
  };
