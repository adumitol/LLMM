<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/productos">
    <html>
      <head>
        <!--Titulo del HTML-->
        <title>Examen XSLT</title>
        <!--conectar el css-->
        <link rel="stylesheet" type="text/css" href="assets/estilos.css"/>
      </head>
      <body>
        <!--Sacamos el nombre del empresa-->
        <h1>Lista de Productos (<xsl:value-of select="empresa/nombre"/>)</h1>
        <!--Creamos la tabla-->
        <table>
          <tr>
            <!--Le ponemos el nombre a los titulos de la tabla-->
            <th>Nombre</th>
            <th>Precio</th>
            <th>Peso</th>
            <th>Descripcion</th>
            <th>Ciudades</th>
          </tr>
          <!--For each para sacar los productos-->
          <xsl:for-each select="producto">
            <!--Los ordenamos por orden de precio ascendente-->
            <xsl:sort select="precio" order="ascending"/>
            <tr>               
              <td>
                <!--Hacemos las restricciones con los if para pintar de un color u otro-->
                <xsl:if test="precio/@moneda = 'eur'">
                    <span class="rojo">
                            <!--Sacamos la informacion del xml -->
                        <xsl:value-of select="nombre"/>
                    </span>
                </xsl:if>
                <xsl:if test="precio/@moneda = 'usd'">
                    <span class="azul">
                        <xsl:value-of select="nombre"/>
                    </span>
                </xsl:if>
            </td>
              <td><xsl:value-of select="precio"/><xsl:value-of select="precio/@moneda"/></td><!--Sacamos el atributo-->
              <td><xsl:value-of select="peso"/><xsl:value-of select="peso/@unidad"/></td>
              <td><xsl:value-of select="descripcion"/></td>
              <!--Hacemos un foreach para sacar las cudades-->
              <td><xsl:for-each select="ciudades">
                <!--Ordenamos las ciudades por sus paquetes descendente-->
                 <xsl:sort select="ciudad/@paquetes" order="descending"/>
                 <xsl:value-of select="ciudad"/> (<xsl:value-of select="ciudad/@paquetes"/>)
                </xsl:for-each>
            </td>
            </tr>
          </xsl:for-each>
        </table>
        <!--Sacamos la informacion de la direccion de la empresa-->
        <p>Direccion de la empresa <strong><xsl:value-of select="empresa/direccion"/></strong></p>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
        