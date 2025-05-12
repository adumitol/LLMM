<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/estudiantes">
  <html>
    <head>
      <title>Lista de Estudiantes</title>
      <link rel="stylesheet" type="text/css" href="assets/listaEstudiantes.css"/>
    </head>
    <body>
      <div><h1>Lista de Estudiantes</h1></div>
      <xsl:for-each select="estudiante">
        <xsl:sort select="edad" order="descending"/>
        <ul>
          <xsl:attribute name="class">
            <xsl:if test="calificacion &gt; 9">verde</xsl:if>
          </xsl:attribute>
          <li><strong>Nombre: </strong><xsl:value-of select="nombre"/></li>
          <li><strong>Edad: </strong><xsl:value-of select="edad"/></li>
          <li><strong>Calificación: </strong><xsl:value-of select="calificacion"/></li>
        </ul>
      </xsl:for-each>
    </body>
  </html>
</xsl:template>
</xsl:stylesheet>
