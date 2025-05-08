<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/empresa">
    <html>
      <head>
        <title>Lista de Empleados</title>
        <link rel="stylesheet" type="text/css" href="assets/listaEmpleados.css"/>
      </head>
      <body>
        <h2>Empleados</h2>
        <table>
          <tr>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Departamento</th>
            <th>Salario</th>
            <th>Antigüedad</th>
          </tr>
          <xsl:for-each select="empleado">
            <xsl:sort select="nombre"/>
            <tr>
              <xsl:attribute name="class">
                <xsl:if test="antiguedad &gt; 5 and antiguedad &lt;= 10">
                  verde
                </xsl:if>
              </xsl:attribute>
              <td><xsl:value-of select="nombre"/></td>
              <td><xsl:value-of select="puesto"/></td>
              <td><xsl:value-of select="departamento"/></td>
              <td><xsl:value-of select="salario"/></td>
              <td><xsl:value-of select="antiguedad"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
