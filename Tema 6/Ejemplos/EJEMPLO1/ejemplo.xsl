<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html lang="es">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Document</title>
            </head>
            <body>
                <ul>
                    <xsl:for-each select="productos/producto">

                        <li>
                            <xsl:value-of select="nombre"/>
                            <xsl:value-of select="precio"/>
€                            <xsl:value-of select="@tipo"/>
                        </li>

                    </xsl:for-each>
                </ul>
            </body>
        </html>

    </xsl:template>
</xsl:stylesheet>