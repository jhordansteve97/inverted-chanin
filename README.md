# Invertir palabras sin alterar su posición

[demo](https://jhordansteve97.github.io/inverted-chanin)

### Descripción
Se pidio que se realizar un proyecto en el que se invirtiera las palabras sin alterar su posicion con funiones de alto nivel sin usar bucles

### explicacion
1. Ser utilizo la funcion `split(' ')` para convertir en arreglo las palabras.
2. se realizo un `map()` al ser una funcion de alto nivel cumple con los requisitos esto hace que no altere el orden de las palabras.
3. Se volvio a utiliza el metodo `split('')` con el mismo objetivo pero ahora por letra
4. Como ya esta en arreglo se puede utilizar el metodo reverse para invertir las letras de cada palabra.
5. utilizamos el `join('')` para juntar las letras y convertirla en cadena.
6. realizamos de nuevo el `join(' ')` pero esta vez para las palabras.