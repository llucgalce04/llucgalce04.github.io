# <u> APUNTES XML y DTD

## Apuntes XML (Extended Markup Language)</u>
![Foto](https://img.freepik.com/premium-vector/xml-file-format-icon-color-computer-software-web-design_755164-2720.jpg)

### Historia de XML

**XML** (Extensible Markup Language) es un lenguaje de marcado que permite la **creación de documentos con estructuras jerárquicas**, los cuales pueden ser procesados por distintas aplicaciones y plataformas. **Fue desarrollado por el W3C (World Wide Web Consortium)** en **1998** como una evolución de **SGML (Standard Generalized Markup Language)**, pero más simple y adaptado a la web. 
![Foto](https://upload.wikimedia.org/wikipedia/commons/e/ed/W3C%C2%AE_Icon.svg)

## Sintaxis 
La sintaxis de **XML** es muy similar a la de **HTML**, aunque con algunas diferencias **importantes**. Los elementos se definen **entre etiquetas**, como en **HTML**, pero se **cierran siempre**, incluso si **no tienen contenido:**

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

### Casos de uso

**XML** se utiliza en ***numerosas aplicaciones y sistemas como***:

**-  Intercambio de datos entre aplicaciones**
**- Configuración de sistemas**
**- Almacenamiento de información estructurada**
**- Generación de documentos (por ejemplo, informes)**

### Ejemplo de arxivo XML:
```XML
<?xml version="1.0" encoding="utf-8"?>
<enemy>
	<name>Aty</name>
	<damage>3</damage>
	<health>12</health>
</enemy>
```

## <u>DTD</u>
## Apuntes DTD (Document Type Definition)
![Foto](https://cdn-icons-png.flaticon.com/512/29/29051.png)

## Historia de DTD
La especificación de **Document Type Definition (DTD)** se creo durante el desarrollo del lenguaje de marcado **SGML (Standard Generalized Markup Language)**, que se utilizaba para la creación de documentos técnicos y científicos en la década de **1980**.

## Que es DTD?
**(Document Type Definition)** es un conjunto de reglas que definen la **estructura** y **contenido** de un documento **XML**. Se puede definir de forma **interna**, **dentro** del propio documento XML, o **externa**, en un archivo **aparte**. La definición interna se **incluye entre corchetes angulares**, justo **después** de la declaración **XML**: 

## Ejemplo de Codigo XML con DTD interno
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
## Sintaxis 
La sintaxis de **XML** es muy similar a la de **HTML**, aunque con algunas diferencias importantes. Los elementos se definen entre etiquetas, como en HTML, pero se cierran siempre, **incluso si no tienen contenido:**

```XML
<!DOCTYPE raiz [
  <!ELEMENT Name (#PCDATA)>
]>
```
También es obligatorio definir un elemento **"raíz"**, que englobe a todos los demás elementos:

```XML
<raiz>
  <elemento></elemento>
</raiz>
```
### Archivo DTD
```XML
<!ELEMENT character (name, surname?, age, Race, class, gender, height, weight, lenguage, TieneLaESO?, weapons?> <!-- el ? es que puede estar o no -->
<!ELEMENT name(#PCDATA)>
<!ELEMENT surname(#PCDATA)>
<!ELEMENT age EMPTY> <!-- algo o nada -->
<!ELEMENT Race(#PCDATA)>
<!ELEMENT class(#PCDATA)>
<!ELEMENT gender(#PCDATA)>
<!ELEMENT height EMPTY>
<!ELEMENT weight EMPTY>
<!ELEMENT lenguage(#PCDATA)>
<!ELEMENT TieneLaESO EMPTY>
<!ELEMENT weapons (weapon*)> <!-- * = 0 o mas veces, + = 1 o mas veces -->
<!ELEMENT weapon EMPTY>

<!ATTLIST character id_charater CDATA #REQUIRED>
<!ATTLIST age years CDATA #REQUIRED>
<!ATTLIST gender abbrev CDATA #REQUIRED>
<!ATTLIST height cm CDATA #REQUIRED>
<!ATTLIST weight kg CDATA #REQUIRED>
<!ATTLIST lenguage abbrev CDATA #REQUIRED>
<!ATTLIST weapon id_charater CDATA #REQUIRED>
``` 
### Casos de uso

**XML** se utiliza en ***numerosas aplicaciones y sistemas como***:

**-  Validación:** Los archivos **DTD** se utilizan para validar documentos **XML** y asegurarse de que cumplan con la estructura y contenido definidos. La validación puede **detectar errores** en el documento XML antes de su procesamiento.
**- Especificación de la estructura del documento:** Los archivos **DTD definen la estructura del documento XML**, especificando los elementos que lo componen, su **orden jerárquico**, y los **atributos que pueden incluir**. De esta manera, los archivos **DTD** permiten una mayor comprensión y estandarización de los documentos XML.
