# Wyszukiwarka Przepisów Kulinarnych

Aplikacja internetowa umożliwiająca wyszukiwanie przepisów kulinarnych przy użyciu zewnętrznego API. Stworzona przy użyciu create-react-app, napisana w React i wykorzystująca komponenty MUI.

### Narzędzia użyte w projekcie

- Komponenty MUI: [MUI](https://mui.com/).
- Zewnetrzne API: [EDAMAM](https://www.edamam.com/).
- Projekt został stworzony przy uzyciu: [Create React App](https://github.com/facebook/create-react-app).

## Plik App.js

Plik _App.js_ importuje niezbędne komponenty i style, definiuje główną strukturę aplikacji oraz obsługuje stan przepisów za pomocą hooka _useState_.

**Opis:**
- Importy: Importuje plik stylów _App.css_, komponenty _Searchbar_, _Header_ i _RecipesList_, oraz hook _useState_.
- Stan: Używa hooka _useState_ do zarządzania stanem _recipes_.
- Renderowanie: Renderuje komponenty _Header_, _Searchbar_ i _RecipesList_, przekazując odpowiednie propsy.
- Eksport: Eksportuje domyślnie komponent _App_.

## Plik index.js

Plik _index.js_ jest plikiem wejściowym aplikacji React, który renderuje główny komponent aplikacji (_App_) w DOM. Ustawia także globalny temat za pomocą Material-UI.

**Opis:**
- Importy: Importuje _React_, _ReactDOM_, plik stylów _index.css_, komponent _App_, oraz funkcje _ThemeProvider_ i _createTheme_ z Material-UI.
- Tworzenie tematu: Definiuje _themeOptions_, które zawierają ustawienia palety kolorów i typografii, a następnie tworzy temat za pomocą _createTheme_.
- Renderowanie: Renderuje główny komponent _App_ wewnątrz _ThemeProvider_, który dostarcza temat dla całej aplikacji. Aplikacja jest renderowana w trybie _React.StrictMode_.

## Komponent RecipesList

Komponent RecipesList to funkcyjny komponent Reacta, który renderuje listę przepisów w siatce (grid) za pomocą Material-UI. Każdy przepis jest wyświetlany jako karta (card) z obrazem, tytułem oraz informacjami o wartości odżywczej.

**Właściwości**
- _recipes_: Tablica obiektów przepisów do wyświetlenia. Każdy obiekt przepisu powinien zawierać dane o obrazie, tytule oraz wartości odżywczej.

**Importowane moduły**
- Material-UI: Do budowy interfejsu użytkownika (_Grid_, _Card_, _CardMedia_, _CardContent_, _Typography_).
- styled: Do stylizacji komponentów (_StyledCard_).

**Stylizacja**
- Komponent _StyledCard_ jest styled-component utworzonym za pomocą funkcji _styled_ z Material-UI, który ustawia wysokość karty na 100%.

**Renderowanie komponentu**

Komponent _RecipesList_ renderuje siatkę (_Grid_) z kartami przepisów. Każda karta zawiera:
- Obraz przepisu (_CardMedia_).
- Tytuł przepisu (_Typography_).
- Informacje o wartości odżywczej na 100 gramów (_Typography_).

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
