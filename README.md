# M04-UF1: llucgalce04.github.io
Cyber: Llenguatges de Marques (M04 - UF1)

## Página web de ejemplo de Lenguajes de Marcas (M04UF1)


### Lista de tareas a hacer en la página

- [x] Crear plantilla del cuerpo HTML

- [x] Añadir navegación

- [x] Crear estilo básico

# XML, DTD, Markdown, HTML, CSS y JavaScript

## Apuntes XML (Extended Markup Language)

### XML, un poco de historia

**XML** (Extensible Markup Language) es un lenguaje de marcado que permite la **creación de documentos con estructuras jerárquicas**, los cuales pueden ser procesados por distintas aplicaciones y plataformas. **Fue desarrollado por el W3C (World Wide Web Consortium)** en **1998** como una evolución de **SGML (Standard Generalized Markup Language)**, pero más simple y adaptado a la web. 


![Foto](https://upload.wikimedia.org/wikipedia/commons/e/ed/W3C%C2%AE_Icon.svg)

---



### **¿Qué son las marcas y qué son los documentos?**

Las **marcas** son los elementos que se utilizan para *estructurar el contenido del documento*. Tienen su **apertura** y su **cierre**. Para cerrar las etiquetas se pone una **/**. Por otro lado, el documento XML es el archivo que *contiene la información estructurada utilizando marcas*. 

Las **marcas** se refiere al texto que se tiene que **parsear**, es decir *interpretar*, el programa lo interpreta. El parseador tiene que leer el texto plano y cuando lo muestra en pantalla, ha de mostrar el texto en negrita.
### **Historia de HTML4, XML y XHTML**

**HTML 4** no seguía ningún *estándar*. No se sabía cuando cerraban las etiquetas por ejemplo. Entonces, decidieron crear **XML** (Extended markup languages), donde definía estas normas *rígidas* pero *flexibles* (buen oxímoron) para poder crear lo que queramos. Xml define las normas de como hacer las etiquetas, no las etiquetas en sí, es decir todas las etiquetas que se abren se tienen que cerrar. **No impone visualización, impone estructura**.

Después salió **XHTML** de los 1998 hasta 2008, que es HTML4 pero con la capa de filtros de XML. Aquí Microsoft lo pasó un poco mal ya que todas las empresas empezaron a seguir estos estándares sufrió muchas denuncias. Intentó seguir los estándares pero no como todos pensabamos.

## Comenzamos a crear nuestro primer archivo XML

### Archivos de texto plano, enriquecido y binario:
* **Texto plano** →  archivo que contiene texto sin formato o estructura, es decir, simplemente una secuencia de caracteres. El texto plano es legible para los humanos y se puede abrir y editar con un editor de texto simple.
    * *Formatos* → VIM, Notepad, archivos de Kotlin, Python, C++, documentos.txt, docx etc.

* **Texto enriquecido** → Es un texto plano con info extra. Se refiere a un archivo que contiene texto con formatos adicionales como negritas, cursivas, subrayados, tamaños de fuente, colores, etc. Por ejemplo, mis apuntes de Google Docs son texto enriquecido. 
    *  *Formatos* → HTML, RTF, DOC. 

* **Binario** → Contienen datos en un formato que no es legible directamente por los humanos, sino que está diseñado para ser procesado por ordenadores. 
    * *Formartos* → Imagen JPEG, PNG, archivos de audio MP3, .MP4, archivos sql.

### Tipos de etiquetas
>**cabecera →** `<?xml version="1.0" encoding="UTF-8" ?>.`
>>Esto indica a nuestro programa o a la librería que utilizamos internamente de programación, que es lo que vamos a leer, qué codificación y que versión del estándar es.

>**Para comentar →** `<!-- texto -->`

* Etiquetas pares:
	* Se abren y cierran, Cuando lo que tenemos que escribir es muy variable, puede ser par (character por ejemplo, o cuando algo vaya a contener muchos datos)

* Etiquetas impares:
	* Se cierran en sí mismas. Por ejemplo la edad, es una cosa muy concreta, entonces es recomendable hacerla impar.


>**UTF-8** → ignifica que incluye todos los carácteres (sistema de codificación universal) incluidos extraterrestres (emojis). 

XML sirve para construir los datos como queremos. Estamos diseñando un formato, si hacemos las etiquetas impares, debemos de hacerlo para todos los personajes.

Lo bueno de XML, es que podemos aportar información de cada elemento.
### Código en XML:
```XML
<?xml version="1.0" encoding="UTF-8"?>
<raiz>
  <elemento></elemento>
</raiz>
```
También es obligatorio definir un elemento **"raíz"**, que englobe a todos los demás elementos:

```XML
<raiz>
  <elemento></elemento>
</raiz>
```

---

## Historia de DTD (Document Type Definition)
La especificación de **Document Type Definition (DTD)** se creo durante el desarrollo del lenguaje de marcado **SGML (Standard Generalized Markup Language)**, que se utilizaba para la creación de documentos técnicos y científicos en la década de **1980**.


## Apuntes DTD (Document Type Definition)

**DTD** *(Document Type Definition)*. Es un conjunto de reglas que especifican la estructura, los elementos y los atributos que puede contener un documento **XML**.

El propósito de una DTD es establecer una **estructura bien definida y coherente** para un tipo específico de documento XML.

**DTD** es más antiguo que **XSD** *(XML Schema Definition)* y **DTD** es *universal*, se interpreta bastante más fácil, los bancos lo usan. También se utiliza para *validar*.

El **orden de validación puede variar según tu gusto**: Puedes poner primero `<!ELEMENT>` que es una *declaración*, seguido de el **término técnico** que se refieren a un *tipo de contenido permitido en un elemento*, como por ejemplo **#PCDATA** y justo abajo la otra *declaración* `<!ATTLIST>` que se refiere a la declaración de los *atributos*.

Terminos técnicos:

* **#REQUIRED**: Esta etiqueta se utiliza para especificar que un atributo es obligatorio para un elemento determinado. 

* **#PCDATA**: Esta etiqueta se utiliza para especificar que un elemento puede contener solo datos de texto plano (texto sin formato), sin etiquetas XML ni caracteres especiales.

* **#EMPTY**: Esta etiqueta se utiliza para especificar que un elemento no puede contener contenido. 

### Código en DTD
```XML
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE marcadores [
   <!ELEMENT marcadores (pagina)*>
   <!ELEMENT pagina (nombre, descripcion, url)>
   <!ELEMENT nombre (#PCDATA)>
   <!ELEMENT descripcion (#PCDATA)>
   <!ELEMENT url (#PCDATA)>
]>

<marcadores>
   <pagina>
      <nombre>Abrirllave</nombre>
      <descripcion>Tutoriales de informática.</descripcion>
      <url>http://www.abrirllave.com/</url>
   </pagina>
   <pagina>
      <nombre>Wikipedia</nombre>
      <descripcion>La enciclopedia libre.</descripcion>
      <url>http://www.wikipedia.org/</url>
   </pagina>
   <pagina>
      <nombre>W3C</nombre>
      <descripcion>World Wide Web Consortium.</descripcion>
      <url>http://www.w3.org/</url>
   </pagina>
</marcadores>
```

---

## Apuntes MarkDown

MarkDown sirve para documentar, estos son los apuntes de MarkDown:

`*cursiva*` → esto en markdown se le llama enfasis

### Listas
* uno
	* sub apartado 1
* dos
	* sub apartado 2
* tres
	* sub apartado 3
	
### Citas
> Esto sirve para citar
> para destacar cosas concretas
> como un codiguito
>> Esto es una cita **dentro** de una _cita_ 


### Enlaces

Enlace
[CondorChem](https://condorchem.com)

Y [ESTO](http://enti.cat) es otro enlace

### Imagen incrustada
![Descripcion de la imagen](https://cdn-jagbh.nitrocdn.com/TYVZHePxisufUuSiVWDElscksnaOxEbE/assets/images/optimized/rev-4d13f89/media/yr7n0u3qzO9nG/giphy.gif)


### Ejemplo de resaltado de sintaxis

```kotlin
fun printOnlyOdds(list: List<Int?>) {

    for (element in list) {
        if ((element?.rem(2) ?: 0) != 0) {  //rem = remainder %
            print("$element ")
        }
    }
}
```

### Listas de tareas
- [ ] Primera tarea
- [X] Segunda tarea
- [ ] Tercera tarea



### Carácteres extendidos
:poop: :alien: :cry: :imp: :relaxed: :laughing: :cherries: :rat:


### Estilo de caracteres

*cursiva* _cursiva_

**negrita** __negrita__

~~TACHADO~~

~~***tachado negrita u cursiva***~~

### Tablas
| id_character | name      | age | level |
| ---:         | ---:      | ---:| ---:  |
| 1            | Eustaquio | 197 | 99    |
| 2            | Mariana   | 20  | 100   | 
| 3            | Mortadelo | 100 | 1     |
| 4            | Messi     | 44  | 99    |


### Escapar caracteres
\# escapar 

\*escapar*

---
