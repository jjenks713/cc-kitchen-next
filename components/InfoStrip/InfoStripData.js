import MapIcon from '@mui/icons-material/Map';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export const info = [
    {
        title: "Address",
        icon: <MapIcon />,
        info: "477 S. Main St. Ephraim, UT 84627",
        link: "https://goo.gl/maps/k1PkfAyEViEJQnfH6",
        data: <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.2256418945276!2d-111.58867818438938!3d39.35112652767549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874c71aeef6cb525%3A0x2fe449c62fdcffb8!2sCharlee&#39;s%20comfort%20kitchen!5e0!3m2!1sen!2sus!4v1669400653775!5m2!1sen!2sus"
            width="275"
            height="150"
            style={{ border: "0", borderRadius: "20px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    },
    {
        title: "Contact",
        icon: <MailOutlineIcon />,
        info: "contact@charlees-comfort-kitchen.com",
        link: "mailto:contact@charlees-comfort-kitchen.com",
        phone: "+1 (435) 226-3635"
    },
    {
        title: "Hours",
        icon: <AccessAlarmIcon />,
        data: <ul>
            <li>Mon - 11am-6pm</li>
            <li>Tue - 11am-6pm</li>
            <li>Wed - 11am-6pm</li>
            <li>Thu - 11am-6pm</li>
            <li>Fri - 11am-6pm</li>
            <li>Sat - 11am-6pm</li>
            <li>Sun - Closed</li>
        </ul>
    }
]