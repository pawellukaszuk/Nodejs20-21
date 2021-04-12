## Zadania do wykonania we własnym zakresie

8. Zmodyfikujmy zadanie 7 tak by middleware Express `express.static` zwracało pliki tylko z folderu `images`, folder ten powinien znajdować się w głównym folderze aplikacji.

9. Napiszmy middleware który loguje w konsoli czas odebrania żądania oraz czas wysłania odpowiedzi. Uwaga: czas wysłania odpowiedzi zalogujmy po jej wysłaniu!

10. Rozbudujmy aplikację z zadania 9 o zapisywanie logów do pliku - nowe logi powinny dopisywać się na końcu pliku.

11. Napiszmy aplikację która zwraca dane użytkownika pobrane z adresu `https://jsonplaceholder.typicode.com/users/{userId}`. UserId niech będzie pobierane  adresu naszego endpointu (np `http//localhost:4700/users/:userId`). W przypadku braku użytkownika lub problemów w komunikacji z serwerem rzućmy wyjątek, który zostanie obsłużony w middleware. Middleware powinno zapisać do pliku czas wystąpienia wyjątku i zwrócić odpowiedź ze stosownym komunikatem.
