<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html lang="es">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Cartelera de Películas</title>
            </head>
            <body>

                <h2>Películas desde 2010</h2>
                <table>
                    <tr>
                        <th>Título</th>
                        <th>Director</th>
                        <th>Anyo</th>
                        <th>Plataforma</th>
                    </tr>
                    <xsl:for-each select="cartelera/pelicula">
                        <xsl:sort select="anyo" data-type="number" order="descending"></xsl:sort>
                        <xsl:if test="anyo &gt;= 2010">
                            <tr>
                                <td>
                                    <xsl:value-of select="titulo"/>
                                </td>
                                <td>
                                    <xsl:value-of select="director"/>
                                </td>
                                <td>
                                    <xsl:value-of select="anyo"/>
                                </td>
                                <td>
                                    <xsl:value-of select="@plataforma"/>
                                </td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>

                <h2>Películas antes de 2010</h2>
                <ol>
                    <xsl:for-each select="cartelera/pelicula">
                        <xsl:if test="anyo &lt; 2010">
                            <li>
                                <xsl:value-of select="titulo"/>
                            </li>
                        </xsl:if>
                    </xsl:for-each>
                </ol>

            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
