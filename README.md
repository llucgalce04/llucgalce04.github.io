<<<<<<< HEAD
# **APUNTES XML**
## ¿QUE ES XML?
Es un lenguaje de marcas diseñado para describir datos estructurados y facilitar el intercambio de información entre diferentes sistemas informáticos. 
A diferencia de otros lenguajes, XML ofrece soporte a bases de datos y resulta especialmente útil cuando varias aplicaciones necesitan comunicarse 
entre sí o integrar información.

![LOGO_XML](https://cdn-icons-png.flaticon.com/512/2306/2306109.png)

## LA HISTORIA DE XML
XML surge como un subconjunto del lenguaje SGML, creado por IBM en los años 70 y normalizado por la ISO en 1986, 
con la intención de almacenar y compartir grandes cantidades de información en distintas plataformas. HTML, 
creado por **Tim Berners Lee en 1989**, fue la aplicación más conocida de SGML y tenía limitaciones en cuanto a la 
combinación de elementos de diferentes vocabularios y la complejidad para los navegadores al interpretar el código. 
Para solucionar estos problemas, se buscó definir un subconjunto de SGML que permitiera mezclar elementos de diferentes lenguajes, 
la creación de analizadores simples y hacer hincapié en que no se acepte nunca un documento con errores de sintaxis, lo que dio lugar a la creación de XML. 
XML se enfoca en hacer las cosas más sencillas para los programas automáticos que necesiten interpretar el documento, 
en lugar de facilitar la escritura manual de documentos como SGML.
>Más información sobre Tim Berners Lee: [WIKI_TIM](https://es.wikipedia.org/wiki/Tim_Berners-Lee)
![TIM_BERNERS](https://cdn.britannica.com/22/221822-050-3B0A657F/British-scientist-Tim-Berners-Lee.jpg)

## VENTAJAS DE XML SOBRE OTROS LENGUAJES

* **Es extensible** - XML permite crear lenguajes de marcas específicos para diferentes necesidades, lo que lo hace altamente flexible y adaptable.
* **Es compatible con bases de datos** - XML es compatible con bases de datos, lo que permite una fácil integración con aplicaciones y sistemas de bases de datos.
* **Es legible para las personas** - A diferencia de algunos otros formatos de datos, XML utiliza etiquetas legibles para los humanos, lo que lo hace más fácil de entender y editar para los programadores y usuarios.

## ESTRUCTURA DOCUMENTO XML 

* **CABECERA:**
Todo archivo XML contiene la primera línea(cabecera) **<?xml version="1.0" encoding="UTF-8"?>**. 
Esta sirve para especifica la versión de XML que se está utilizando y la codificación de caracteres utilizada en el archivo. 

![CABECERA_XML](https://www.abrirllave.com/dtd/images/iniciar-xml-copy-editor.gif)

* **CUERPO:**
El cuerpo del documento se compone de una estructura jerárquica de elementos o etiquetas que contienen información organizada en forma de texto. 
Cada elemento se define mediante una etiqueta de apertura y una etiqueta de cierre. 
Por ejemplo, el elemento "libro" puede definirse con las etiquetas <libro> y </libro>, además estos elementos pueden contener atributos. Los cuales
se definen dentro de la etiqueta de apertura de un elemento y contienen información adicional sobre el elemento en cuestión. Por ejemplo, el atributo 
"id" se puede usar para identificar de manera única el elemento.

![CUERPO_XML](cuerpo_xml.png)

## DTD

DTD es una descripción de estructura y sintaxis de un documento XML o SGML, además también se utiliza para definir los tipos de datos que se utilizan.

**Hay dos tipos de etiquetas:**
* Las que tienen datos
* Las que estan vacias

**Simbolos de las etiquetas:**

* [?] --> Esta 0 o 1 vez

* [+] --> Esta 1 o más veces repetido

* [*] --> Esta 0 o más veces repetido

```<!ELEMNT character (name, surname, age, race, 
 class,gender, height,
 weight, language, tienelaeso?, weapons?)>
<!ELEMENT name (#PCDATA)>
<!ELEMENT surname (#PCDATA)>
<!ELEMENT age EMPTY>
<!ELEMENT race (#PCDATA)>
<!ELEMENT class (#PCDATA)>
<!ELEMENT gender (#PCDATA)>
<!ELEMENT height EMPTY>
<!ELEMENT weight EMPTY>
<!ELEMENT language (#PCDATA)>
<!ELEMENT tienelaeso EMPTY>
<!ELEMNT weapons (weapon*)>
<!ELEMENT weapon EMPTY>

<!ATTLIST age years CDATA #REQUIRED>
<!ATTLIST gender abbrev CDATA #REQUIRED>
<!ATTLIST height cm CDATA #REQUIRED>
<!ATTLIST weight kg CDATA #REQUIRED>
<!ATTLIST language abbrev CDATA #REQUIRED>
<!ATTLIST language prefix CDATA>
<!ATTLIST id_weapon CDATA #REQUIRED>```
=======
# **Pagina amb les entregas de ("Vuestra Página Profesional (FINAL)")+("Entrega_HTML Reshulón")**
>>>>>>> a0ccffac431c28288596cbca94b58647aef335e4
