document.addEventListener('DOMContentLoaded', () => {
    const data = [
        {
            img: 'public/images/sectionWhoOwns/leadGeneration.png',
            title: 'Lead Generation',
            text: 'Web scraping helps companies attract potential customers by extracting contact information from websites, such as email addresses and phone numbers, monitoring prices and services of competitors in the desired segment. '
        },
        {
            img: 'public/images/sectionWhoOwns/bigData.png',
            title: 'Big Data',
            text: 'Web scraping can be used to aggregate content from an unlimited number of sources and create databases and internal information platforms. These platforms may generate revenue through advertising, affiliate marketing, or subscription models.'
        },
        {
            img: 'public/images/sectionWhoOwns/price.png',
            title: 'Price Comparison',
            text: 'Web scraping tools can collect pricing information from various online stores, allowing merchants to select the best price offer for their customers and partners.'
        },
        {
            img: 'public/images/sectionWhoOwns/financial.png',
            title: 'Financial Data Analysis',
            text: 'Web scraping can collect financial data from sources such as stock exchange websites, news sites, and regulatory documents. This data can be analyzed and systematized, sold to investors, traders and financial institutions.'
        },
        {
            img: 'public/images/sectionWhoOwns/social.png',
            title: 'Financial Data Analysis',
            text: 'Web scraping can extract data from social media platforms to analyze user trends, sentiment, and behavior. This information can be valuable for marketing and advertising departments, government agencies for segmentation and creating unique offers.'
        },
        {
            img: '/public/images/sectionWhoOwns/academic.png',
            title: 'Financial Data Analysis',
            text: 'Web scraping to collect data for scientific research and analysis. Necessary for companies conducting market research and non-profit organizations.ion for card 6.'
        }
    ];

    const wrapperCards = document.getElementById('wrapper-cards');
    // Функция для создания карточки
    const createCard = (cardData) => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = cardData.img;
        img.alt = cardData.title;

        const title = document.createElement('h3');
        title.className = 'card-title';
        title.textContent = cardData.title;

        const text = document.createElement('p');
        text.className = 'card-text';
        text.textContent = cardData.text;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(text);

        return card;
    };

    data.forEach(cardData => {
        const card = createCard(cardData);
        wrapperCards.appendChild(card);
    });
});
