$(document).ready(function() {
    $("a.primary.stat-text-link[data-action='vehicleDetails'][title='View Details & Photos']")
        .text("Send Me Today's Best Price")
        .css({
            "background-color": "red",
            "color": "white"
        });
});

$(document).ready(function() {
    var buttons = $("a.primary.stat-text-link[href^='javascript:ActivEngage.launchChat']");
   
    buttons.each(function() {
        var newButton = $("<a>", {
            "class": "primary stat-text-link new-button",
            "title": "Apply for Financing",
            "text": "Apply for Financing",
            "href": "https://www.diverchev.com/RouteOne",
            "target": "_blank" 
        }).css({
            "background-color": "red",
            "color": "white",
            "display": "block",
            "margin-top": "10px"
        });
        
        $(this).after(newButton);
    });
});

//Enter this code into the console after inserting content of Level3.html right below the <div class="link"> tag.
const linkBlock = document.createElement('div');
linkBlock.classList.add('link-block');

const links = [
    { text: 'I want a\nNew Car', color: 'royalblue', link: 'https://www.diverchev.com/VehicleSearchResults?search=new' },
    { text: 'I want a\nUsed Car', color: 'navy', link: 'https://www.diverchev.com/VehicleSearchResults?search=used' },
    { text: 'I want a\nDeal', color: '(363333)', link: 'https://www.diverchev.com/ChevroletSpecialOffers' },
    { text: 'I want\nService', color: '(161515)', link: 'https://www.diverchev.com/ServiceApptForm' }
];

links.forEach(linkItem => {
    const link = document.createElement('a');
    link.classList.add('linkButton');
    link.textContent = linkItem.text;
    link.href = linkItem.link;
    link.style.backgroundColor = linkItem.color;
    linkBlock.appendChild(link);
});

const linkBlockStyles = `
    .link-block {
        display: none;
    }
`;

const mobileStyles = `
    @media (max-width: 500px) {
        .link-block {
            display: block;
            display: flex;
            flex-direction: column;
            color: white;
        }

        .linkButton {
            position: relative;
            display: inline-block;
            padding-right: 25px;
            margin-left: 15px;
            margin-right: 15px;
            text-align: left;
            color: white;
            text-decoration: none;
            width: 300px;
            height: 75px;
            line-height: 0.25;
        }

        p {
            font-size: 12px;
            margin-left: 15px;
            top: 0;
        }

        .larger2 {
            font-size: 25px;
            margin-left: 15px;
        }

        .white-triangle {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 15px 0 15px 25px;
            border-color: transparent transparent transparent white;
        }
    }
`;

let styleSheet = document.querySelector('#custom-styles');

if (!styleSheet) {
    styleSheet = document.createElement('style');
    styleSheet.id = 'custom-styles';
    styleSheet.type = 'text/css';
    styleSheet.textContent = `${linkBlockStyles} ${mobileStyles}`;
    document.head.appendChild(styleSheet);
}

document.body.appendChild(linkBlock);
