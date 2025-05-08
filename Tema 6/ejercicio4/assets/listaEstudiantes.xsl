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
        <h2>Lista de Estudiantes</h2>
        
        <ul>
          <xsl:for-each select="estudiante">
          <li><xsl:value-of select="nombre"/></li><br/>
          <li><xsl:value-of select="edad"/></li><br/>
          <li><xsl:value-of select="calificacion"/></li><br/>
        </xsl:for-each>
        </ul>
      
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
