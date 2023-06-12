document.addEventListener('DOMContentLoaded', function() {
    const destinationSelect = document.getElementById('destination');
    const monthSelect = document.getElementById('month');
    const priceInput = document.getElementById('price');
  
    // Obliczanie ceny wycieczki
    function calculatePrice() {
      const destination = destinationSelect.value;
      const month = monthSelect.value;
      let price = 0;
  
      if (destination === 'korsyka') {
        switch (month) {
          case 'styczeń':
            price = 12000;
            break;
          case 'luty':
            price = 10000;
            break;
          case 'marzec':
            price = 9000;
            break;
          case 'kwiecień':
            price = 8000;
            break;
          case 'maj':
            price = 9500;
            break;
          case 'czerwiec':
            price = 11000;
            break;
          case 'lipiec':
            price = 14000;
            break;
          case 'sierpień':
            price = 15000;
            break;
          case 'wrzesień':
            price = 11000;
            break;
          case 'październik':
            price = 9500;
            break;
          case 'listopad':
            price = 8500;
            break;
          case 'grudzień':
            price = 11000;
            break;
        }
      } else if (destination === 'tromso') {
        switch (month) {
          case 'styczeń':
            price = 15000;
            break;
          case 'luty':
            price = 13000;
            break;
          case 'marzec':
            price = 12000;
            break;
          case 'kwiecień':
            price = 11000;
            break;
          case 'maj':
            price = 10000;
            break;
          case 'czerwiec':
            price = 10500;
            break;
          case 'lipiec':
            price = 13000;
            break;
          case 'sierpień':
            price = 14000;
            break;
          case 'wrzesień':
            price = 11000;
            break;
          case 'październik':
            price = 10000;
            break;
          case 'listopad':
            price = 9500;
            break;
          case 'grudzień':
            price = 12000;
            break;
        }
      }
  
      priceInput.value = price + ' PLN';
    }
  
    // Aktualizowanie ceny po zmianie opcji
    destinationSelect.addEventListener('change', calculatePrice);
    monthSelect.addEventListener('change', calculatePrice);
  });
  