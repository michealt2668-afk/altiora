<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:template match="/">
    <html>
      <head>
        <title>Altiora Sitemap</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 2rem; }
          h1 { color: #111827; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #d1d5db; padding: 0.6rem; text-align: left; }
          th { background: #f3f4f6; }
          a { color: #2563eb; text-decoration: none; }
        </style>
      </head>
      <body>
        <h1>Altiora Sitemap</h1>
        <p>This sitemap helps search engines discover important pages on the site.</p>
        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="//sm:url">
            <tr>
              <td><a><xsl:attribute name="href"><xsl:value-of select="sm:loc"/></xsl:attribute><xsl:value-of select="sm:loc"/></a></td>
              <td><xsl:value-of select="sm:lastmod"/></td>
              <td><xsl:value-of select="sm:changefreq"/></td>
              <td><xsl:value-of select="sm:priority"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
