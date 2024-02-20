export const dynamic = 'force-dynamic';

import * as cheerio from 'cheerio'
const url = 'https://www.google.com/localservices/prolist?g2lbs=AIQllVyJ-QCRiwrQBw5nOW-yLO6XQumpEMd0Xl6WdAvCNzGz652YccWIFqoBxN4xR8-F0QRG7bRY5jrh15IRau4agVpXDQbmvTIuQRRZZj1cNn1yUGyaFWw6ug6M2pZs7fwTuCRI5Jsg&hl=pt-BR&gl=br&cs=1&ssta=1&q=vargas%20barbearia&oq=vargas%20barbearia&slp=MgA6HENoTUkycHlWLXRXS2hBTVZZUkd0QmgzbENnaUpSAggCYAB6rAFDaEIyWVhKbllYTWdZbUZ5WW1WaGNtbGhTTkcyMDVESXNJQ0FDRm9hRUFBUUFSZ0FHQUVpRUhaaGNtZGhjeUJpWVhKaVpXRnlhV0dTQVF0aVlYSmlaWEpmYzJodmNLb0JPQkFCTWg0UUFTSWFzVVRvSl9yZlhRX1ZYdXl1MDlkcHJsVDNWbnhENFNzV1Y1d3lGQkFDSWhCMllYSm5ZWE1nWW1GeVltVmhjbWxokgFyCg0vZy8xMWpsMTE5cXZrCgsvZy8xdGo2dl9ncwoNL2cvMTFiYnJwMnpwXwoNL2cvMTFmaHZybW0zZwoML2cvMXE2NHQ0dnBxCg0vZy8xMWJidG5tMWJ5Cg0vZy8xMWNwN3JseWYwEgQSAggBEgQKAggB&src=2&spp=Cg0vZy8xMWpsMTE5cXZrOowBV2hvUUFCQUJHQUFZQVNJUWRtRnlaMkZ6SUdKaGNtSmxZWEpwWVpJQkMySmhjbUpsY2w5emFHOXdtZ0VBcWdFNEVBRXlIaEFCSWhxeFJPZ24tdDlkRDlWZTdLN1QxMm11VlBkV2ZFUGhLeFpYbkRJVUVBSWlFSFpoY21kaGN5QmlZWEppWldGeWFXRT0%3D&serdesk=1&lrlstt=1706811425269&ved=2ahUKEwiPoYn61YqEAxX_q5UCHaX4Bf8QvS56BAgcEAE&scp=ChBnY2lkOmJhcmJlcl9zaG9wEkcSEgmz-PKIFzknlRFhub3eqBPQSSIZRmxvcmlhbsOzcG9saXMsIFNDLCA4ODAzNyoUDXcKiu8VxC0V4x2mio7vJQ6kGeMwARoQdmFyZ2FzIGJhcmJlYXJpYSIQdmFyZ2FzIGJhcmJlYXJpYSoJQmFyYmVhcmlh#ts=2'

type MenuItem = {
    name: string,
    price: number,
    isPriceRanged: boolean,
    isStarred: boolean,
}

export async function GET() {
    const menu: MenuItem[] = []

    const data = await fetch(url)
    const html = await data.text()
    
    try {
        const $ = cheerio.load(html)
        
        const listLength = $('ul.VralU').children('li.KNUbhf').length
        const listElements = $('ul.VralU').children('li.KNUbhf')
        
        for (let i = 0; i < listLength; i++) {

            const name = listElements
                .eq(i)
                .find('div.YRxnS')
                .find('div:first')
                .find('div:first')
                .text()

            const price = parseFloat(
                listElements
                .eq(i)
                .find('div.cfa5mc')
                .text()
                .split('R$')[1]
                ?.replace('.', '')
                .replace(',', '.')) || 0

            const isPriceRanged = listElements
                .eq(i)
                .find('div.cfa5mc')
                .text()
                .split('R$')[0]
                .trim()
                .length > 0 ? true : false

            menu.push({
                name,
                price,
                isPriceRanged,
                isStarred: i < 3,
            })
        }

    } catch (err) {
        console.error(err)
        return Response.error()
    }

    return Response.json(JSON.stringify(menu))
}