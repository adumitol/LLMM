<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html lang="es">
            <head>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Informatica</title>
                <style>
                    body {
                        font-size: <xsl:value-of select="concat(biblioteca/css/body/letra, biblioteca/css/body/letra/@unidad)"/>
;
                    }
                </style>
            </head>
        </html>
    </xsl:template>
</xsl:stylesheet>
            