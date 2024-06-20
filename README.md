# Wyszukiwarka Przepisów Kulinarnych

Aplikacja internetowa umożliwiająca wyszukiwanie przepisów kulinarnych przy użyciu zewnętrznego API. Stworzona przy użyciu create-react-app, napisana w React i wykorzystująca komponenty MUI.

### Narzedzia uzyte w projekcie

Komponenty MUI: [MUI](https://mui.com/).
Zewnetrzne API: [EDAMAM](https://www.edamam.com/).
Projekt został stworzony przy uzyciu: [Create React App](https://github.com/facebook/create-react-app).

## Komponent Searchbar

Komponent Searchbar to funkcyjny komponent Reacta, który pozwala użytkownikom wyszukiwać przepisy za pomocą API Edamam. Renderuje pole tekstowe do wprowadzania danych oraz przycisk ikony wyszukiwania do inicjacji wyszukiwania.

**Funkcje**
- Domyślne zapytanie wyszukiwania jest ustawione na "hamburger".
- Pobiera dane przepisów z API Edamam na podstawie zapytania użytkownika.
- Aktualizuje komponent nadrzędny za pomocą pobranych przepisów.
**Właściwości**
- _setRecipes_: Funkcja przekazana jako właściwość, która aktualizuje stan komponentu nadrzędnego za pomocą pobranych przepisów.
**Zarządzanie stanem**
- _query_: Zmienna stanu przechowująca bieżące zapytanie wyszukiwania. Zainicjowana wartością "hamburger".
- _setQuery_: Funkcja do aktualizacji stanu query.
**Pobieranie przepisów**
- Funkcja _fetchRecipes_ to asynchroniczna funkcja, która pobiera przepisy z API Edamam na podstawie bieżącego stanu _query_. Używa ID API i klucza API przechowywanych w zmiennych środowiskowych *REACT_APP_API_ID* i *REACT_APP_API_KEY*.
**Obsługa zdarzeń**
- _handleChange_: Aktualizuje stan query za każdym razem, gdy wartość w polu tekstowym się zmienia.
**Hook useEffect**
- _useEffect_: Wywołuje _fetchRecipes_ za każdym razem, gdy stan _query_ się zmienia.
**Renderowanie komponentu**
Komponent _Searchbar_ zwraca pole tekstowe Material-UI (_TextField_) z następującymi właściwościami:
- _label_: Ustawiony na "Search".
- _onChange_: Funkcja _handleChange_ do aktualizacji stanu _query_.
- _InputProps_: Dodaje element z ikoną wyszukiwania, który wywołuje funkcję _fetchRecipes_ po kliknięciu.
- _fullWidth_: Sprawia, że pole tekstowe zajmuje całą szerokość kontenera.
