<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="text" indent="no"/>
    <xsl:template match="/datos">
{
  "cuentas": [
    <xsl:for-each select="cuentas/cuenta">
      {
        "dnititular": "<xsl:value-of select="@dnititular"/>",
        "creacion": "<xsl:value-of select="creacion"/>",
        "titular": "<xsl:value-of select="titular"/>",
        "saldoactual": "<xsl:value-of select="saldoactual"/>"
      }<xsl:if test="position() != last()">,</xsl:if>
    </xsl:for-each>
  ],
  "fondos": [
    <xsl:for-each select="fondos/fondo">
      {
        "cuentaasociada": "<xsl:value-of select="@cuentaasociada"/>",
        "cantidaddepositada": "<xsl:value-of select="cantidaddepositada"/>",
        "moneda": "<xsl:value-of select="moneda"/>"
      }<xsl:if test="position() != last()">,</xsl:if>
    </xsl:for-each>
  ]
}
    </xsl:template>
</xsl:stylesheet>
