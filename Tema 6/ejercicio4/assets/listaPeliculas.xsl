<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/peliculas">
        <html>
            <head>
                <title>Lista de Películas</title>
                <link rel="stylesheet" type="text/css" href="assets/listaPeliculas.css"/>
            </head>
            <body>
                <h1>Lista de Películas</h1>
                <div class="grid-container">
                    <xsl:for-each select="pelicula">
                        <xsl:sort select="anio" order="descending"/>
                        <div class="tarjeta">
                            <xsl:if test="duracion &gt; 150">
                                <xsl:attribute name="class">tarjeta destacada</xsl:attribute>
                            </xsl:if>
                            <h2><xsl:value-of select="titulo"/></h2>
                            <p><strong>Género: </strong> <xsl:value-of select="genero"/></p>
                            <p><strong>Año: </strong> <xsl:value-of select="anio"/></p>
                            <p><strong>Duración: </strong> <xsl:value-of select="duracion"/> minutos</p>
                        </div>
                    </xsl:for-each>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
