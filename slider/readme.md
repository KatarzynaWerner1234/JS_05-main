# Zadanie - SLider

Napisz kod w JS, który stworzy prosty slider wyświetlający kolejne zdjęcia na podstawie tablicy `images`:

1. Stworz pustą tablice `images`
2. Do tablicy images dodaj adresy dowolnych zdjęć z internetu
    -> Hint: aby wziac zdjecie z internetu, wejdz na google images, kliknij prawy przycisk i wybierz `Skopiuj adres obrazka`
3. Dodaj zmienna counter i ustaw jej wartosc poczatkowa na 0
4. Po zaladowaniu pliku JS, dodaj elementowi img z pliku HTML atrybut src, odpowiadajacy pierwszemu elementowi tablicy images, zdefiniowanym w kroku 1
5. Po wcisnieciu przycisku next, zastap atrybut src obrazka nastepnym elementem z tablicy
6. Po wcisnieciu przycisku prev, zastap atrybut src obrazka poprzednim elementem z tablicy
7. Po wcisnieciu przycisku next, w momencie kiedy jest ostatni element slidera, wstaw pierwsze zdjecie
8. Po wcisnieciu przycisku prev, w momencie kiedy jest pierwszy element slidera, wstaw ostatnie zdjecie