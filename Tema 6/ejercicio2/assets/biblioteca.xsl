<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html lang="es">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Biblioteca</title>
                <style>
                    body {
                        font-size: <xsl:value-of select="biblioteca/css/body/letra"/>
                        <xsl:value-of select="biblioteca/css/body/letra/@unidad"/>;
                    }
                    table {
                        border-color: <xsl:value-of select="biblioteca/css/tabla/colorBorder"/>;
                        border-style: <xsl:value-of select="biblioteca/css/tabla/tipoBorder"/>;
                        border-width: <xsl:value-of select="biblioteca/css/tabla/tamanioBorder"/>
                        <xsl:value-of select="biblioteca/css/tabla/tamanioBorder/@unidad"/>;
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th {
                        background-color: #f2f2f2;
                        padding: 10px;
                        text-align: left;
                        border-bottom: 2px solid <xsl:value-of select="biblioteca/css/tabla/colorBorder"/>;
                    }
                    td {
                        padding: 8px;
                        text-align: left;
                        border-bottom: 1px solid <xsl:value-of select="biblioteca/css/tabla/colorBorder"/>;
                    }
                    .rojo {
                        color: red;
                        font-weight: bold;
                    }
                    .amarillo {
                        background-color: yellow;
                        padding: 4px;
                    }
                </style>
            </head>
            <body>
                <h1>Biblioteca</h1>
                <table>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Año</th>
                        <th>Categoría</th>
                        <th>Estado</th>
                    </tr>
                    <xsl:for-each select="biblioteca/libro">
                        <tr>
                            <td>
                                <xsl:value-of select="titulo"/>
                            </td>
                            <td>
                                <xsl:value-of select="autor"/>
                            </td>
                            <td>
                                <xsl:if test="año &lt; 2000">
                                    <span class="rojo">
                                        <xsl:value-of select="año"/>
                                    </span>
                                </xsl:if>
                                <xsl:if test="año &gt;= 2000">
                                    <xsl:value-of select="año"/>
                                </xsl:if>
                            </td>
                            <td>
                                <xsl:value-of select="categoria"/>
                            </td>
                            <td>
                                <xsl:if test="@prestado='sí'">
                                    <span class="amarillo">Prestado</span>
                                </xsl:if>
                                <xsl:if test="@prestado='no'">
                                    Disponible
                                </xsl:if>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>

                <h2>Autores de libros posteriores a 1950</h2>
                <ol>
                    <xsl:for-each select="biblioteca/libro[año &gt; 1950]">
                        <xsl:sort select="autor" order="descending"/>
                        <li>
                            <xsl:value-of select="autor"/>
                        </li>
                    </xsl:for-each>
                </ol>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>