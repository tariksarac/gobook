import React from 'react';
import HeadingContainer from "../Common/HeadingSection/HeadingContainer";
import Heading from "../Heading/Heading";
import * as Markdown from 'react-markdown';

const Terms = (props) => {
    return (
        <div className={'terms-condition'} style={{gridArea: 'main'}}>
            <HeadingContainer style={{flexDirection: 'column'}}>
                <Heading mainTitle={'terms of use'} hasLine/>
                <Markdown source={terms} style={{width:'100%'}}/>
                {/*// <div className={'terms-condition'} >{terms}</div>*/}
            </HeadingContainer>
        </div>


    );
};

Terms.propTypes = {};
Terms.defaultProps = {};

export default Terms;

const terms = '__GENERAL__\n' +
    '\n' +
    'The general terms and conditions constitute an integral part of the package tour purchase\n' +
    'contracts entered into between GoBook d.o.o. Visoko, Alaudin 10, 71300 Visoko and travelersapplying to book a certain package tour organized by GoBook d.o.o. Visoko. In case that certain provisions set forth in package tour programs differ from the ones stipulated herein, the provisions set forth in the programs shall prevail.\n' +
    'In case of telephone/internet sales, the travelers are considered to have accepted the general terms and conditions once they make the order for the tour by telephone or online. \n' +
    'These general terms and conditions shall not apply to purchase of airline tickets and sales ofpackage tours organized by other tour operators where GoBook d.o.o. acts as an agent, in which case the terms and conditions of the other tour operators or airlines as well as international legislation in this filed shall be binding for travelers. In addition, the general terms and conditions shall not apply to terms of travel health insurance when traveling abroad (if such insurance is included in the tour price), where GoBook d.o.o. Visoko acts as an agent and in which case the general terms and conditions of the insurance provider shall apply.\n' +
    '\n' +
    '__APPLICATION AND CONTRACT__\n' +
    '\n' +
    'A traveler can apply for a tour package organized by GoBook d.o.o. Visoko at the office of GoBook d.o.o. Visoko, Alaudin 10, 71300 Visoko, by telephone, fax, e-mail or other means of electronic communication, as well as with our authorized agents.\n' +
    'GoBook d.o.o. Visoko shall offer its services through its web site at www.gobook.ba. Based on queries of individual parties, GoBook d.o.o. Visoko shall tailor one or more tour offers which shall be sent to the party along with the general terms and conditions. The party can also select one of the already existing package tours. Finally, the party books the package tour personally at the offices, by telephone or email.\n' +
    'By signing a contract, voucher or a booking form, or by giving their credit card number when purchasing our services online, the travelers fully accept these Tour Booking Terms and Conditions which they have previously read with due care and attention. When applying for a certain tour, for the purpose of booking the selected service, the travelers shall pay 30% of the package tour price (per person) unless the package tour program specifies otherwise. The balance of the full price shall be paid in full at least 15 days before the tour departs unless the tour program specifies otherwise (with installment payment being an exception).\n' +
    '\n' +
    '__PRICE AND CONTENT OF PACKAGE TOURS__\n' +
    '\n' +
    'The package tour price (unless the tour program specifies otherwise) includes:\n' +
    '-  transport,\n' +
    '-  hotel accommodation with breakfast,\n' +
    '-  tour organization.\n' +
    'If it is specified in the tour program, the price can also include the airport landing fees and the costs of professional local guides.\n' +
    'The package tour price does not include (unless agreed otherwise):\n' +
    '-  Optional visits and excursions,\n' +
    '-  Visa fees and charges,\n' +
    '-  Tickets and entrance fees for sights and facilities to be visited.\n' +
    'All kinds of special services (single room, special diet, etc.) are paid by the travelers themselves and the travelers have to order any such services when booking the tour. If a traveler requests a special service while on tour, they will pay it directly to the guide or the representative of GoBook d.o.o. Visoko, in the currency of the country they are visiting.\n' +
    'The travelers must pay in full the agreed tour price to GoBook d.o.o. Visoko within the specified payment period. The price, due date and method of payment shall be specified in the Contract.\n' +
    '\n' +
    '__RIGHT TO INCREASE THE PRICES AND RIGHT TO CANCEL DUE TO THE INCREASED PRICES__\n' +
    '\n' +
    'All tour prices are based on the exchange rate between Bosnian Convertible Mark (BAM) and\n' +
    'foreign currencies. GoBook d.o.o. Visoko reserves the right to request an increase in the agreedprice if one of the following takes place after the contract was signed:\n' +
    '-  Change in currency exchange rates in relation to the date on which the tour program was published,\n' +
    '-  Change in transport costs (fuel prices, road tolls, etc.),\n' +
    '-  Changes in prices charged by hotel operators and passenger carriers.\n' +
    '-  GoBook d.o.o. Visoko shall notify the travelers about the change in prices either verbally or in writing.\n' +
    'The travelers can cancel their tour free of charge in case that the agreed price is increased by over 10% not later than 48 hours after receiving the written notification about the price increase. If the traveler fails to cancel the tour within the specified deadline, either personally at the offices of GoBook d.o.o. Visoko or in writing, they shall be deemed to have accepted the changed price.\n' +
    'In case of tour cancelation due to price increase exceeding 10%, the travelers shall not be entitled to any compensation of damages. The travelers are bound to accept any price increase up to 10%. The posted prices are the result of agreements between GoBook d.o.o. Visoko and its partners and do not have to correspond to the prices displayed at the actual destination where the traveler will be staying.\n' +
    'In case of change in transport costs, change in currency exchange rates, lower than the required minimum number of travelers or similar, GoBook d.o.o. Visoko reserves the right to increase the tour price by an appropriate amount or to cancel the tour at least five days before intended departure. The tour price shall apply as the date on which the tour program was posted.\n' +
    '\n' +
    '__DISCOUNTS__\n' +
    '\n' +
    'All discounts, as well as other benefits are specified in the descriptions of individual package tours.\n' +
    '\n' +
    '__TRAVEL DOCUMENTS AND OTHER DOCUMENTATION__\n' +
    '\n' +
    'Upon request of the tour organizer, the traveler has to provide in due time all the information necessary for organization of the tour, especially details necessary for transportation tickets and accommodation booking.\n' +
    'If the travelers fail to provide the information requested by the tour organizer, if they provide the information late or if they provide false or incorrect information, the travelers themselves shall bear the risk for complete or partial failure to carry out the tour. In the events when the tour cannot be organized because of the travelers’ failure to fulfill their obligations, it shall be deemed that the travelers have withdrawn from the contract and they shall suffer the consequences related to withdrawing from the contract.\n' +
    'The travelers must possess a valid travel document with which they can enter a certain country. The travelers have to be aware and comply with all legal provisions regarding the validity of their travel documents. The requirements for validity of travel documents apply to the LAST day of the tour! GoBook d.o.o. Visoko shall not be held liable or responsible for possible inconveniences or forced trip interruption suffered by the travelers.\n' +
    'The travelers are bound to obtain visas for entering the countries which require visas as well as to procure documents necessary to cross borders.\n' +
    'If travelers lose their documents or if they get stolen during the tour, and if those documents are necessary for continuation of the tour or for return to their country of residence, the travelers shall obtain new documents at their own expense. In case that travelers have to end the tour due to loss or theft of their documents, they are not entitled to any refunds.\n' +
    'In case of breach of the aforementioned provisions, the traveler shall cover any damages caused, as well as damages sustained by the tour operator or other travelers due to his/her negligence.\n' +
    'The traveler shall be liable and responsible for damages caused to the tour operator by failing to fulfill his/her obligations under the package tour contract.\n' +
    '\n' +
    '__CATEGORIZATION AND DESCRIPTION OF SERVICES__\n' +
    '\n' +
    'The offered accommodation listed in the GoBook Visoko package tours are described accordingto the official categorization of the country where the accommodation is located applicable at thetime when the tour program was posted.\n' +
    'GoBook d.o.o. Visoko shall take no responsibility for any verbal or written information which is not in accordance with the description of services and accommodation facilities in the posted tour programs.\n' +
    'Within visits to the towns specified in its tour programs, GoBook d.o.o. Visoko does not include visits to interiors of public buildings, institutions or cultural monuments, except when it is expressly mentioned. Travelers have to take into consideration that some of the hotel features or facilities are not always available due to objective circumstances, as well as that some localities at a certain destination, such as shopping malls, stores, restaurants or museums, might not be opened because of religious or state holidays.\n' +
    '\n' +
    '__ACCOMMODATION IN ROOMS/SUITES__\n' +
    '\n' +
    'Who is going to sleep in which room/suite is decided by the reception services of the hotel the travelers are staying at.\n' +
    '\n' +
    '__NOTIFICATIONS PRIOR TO DEPARTURE__\n' +
    '\n' +
    'The travelers shall receive final notification at least 5 (five) days before departure. All damages caused by travelers providing incomplete or incorrect address for the purpose of filling in the bills and receipts and sending notifications about the tour, shall be borne by those travelers. In the event that the travelers do not receive the notification at least five days before departure, they are bound to contact GoBook immediately and request to be sent the notification. Any claims or complaints due to unreceived mail shall not be accepted by GoBook d.o.o. Visoko.\n' +
    '\n' +
    '__NOTIFICATIONS ON PROTECTION OF PERSONAL AND CONFIDENTIAL INFORMATION__\n' +
    '\n' +
    'Travelers provide their personal information of their own free will. GoBook d.o.o. Visoko needs the said information in order to provide the requested services. Notifications the tour operator receives about the traveler, his/her baggage and movements can be released or disclosed only with the traveler’s express consent or at the request of the competent authorities. GoBook d.o.o. Visoko shall not be held liable or responsible for any cases of loss or theft during the tour.\n' +
    '\n' +
    '__BAGGAGE__\n' +
    '\n' +
    'GoBook d.o.o. Visoko shall not be responsible for transportation, theft or damage of traveler’s baggage or other personal belongings, valuables or documents from accommodation facilities (hotel rooms, suites, etc.) or transport facilities (airplanes, buses, ships, etc.). Report of stolen or damaged baggage shall be addressed by the traveler directly to the transport operator, police or hotel. Transportation of special baggage (such as bicycle, surfboard, golf equipment, musical instruments, etc.) has to be reported by the traveler while booking the fares and paid directly to transport operator according to the applicable rules of the airline company, unless it is specified otherwise in the package tour program. All costs or damages that might be incurred shall be borne by the travelers themselves. If traveling by airplane, travelers are entitled to free baggage allowance up to a certain size and weight (according to terms and conditions of individual airlines), for each additional kilogram of baggage, the travelers have to pay an on-spot additional fee in the appropriate currency, as provided for by terms and conditions of individual airline companies. The maximum allowed weight of baggage to be registered at check-in is given before the journey starts. For each additional kilogram, the travelers have to pay an additional fee. The allowed weight/size of hand baggage that can be taken on board an airplane can vary, and travelers shall be informed thereof before they depart on their journey.\n' +
    'Children regardless of their age have no right to free transport of baggage in air transport. In bus transport, a traveler can carry two pieces of personal baggage. The travelers are bound to take care of their belonging taken into the bus, and they have to take those belongings with them whenever they leave the bus. Otherwise they take responsibility for any theft, loss or damage of belongings which have been left inside the bus without their supervision.\n' +
    '\n' +
    '__CLAIMS AND COMPLAINTS__\n' +
    '\n' +
    'The traveler is bound to notify on the spot a representative of GoBook d.o.o. Visoko about any irregularities that might arise. In case that a complaint can be dealt with on the sport (e.g. insufficiently clean room, equipment, room position in the hotel, etc.), and the traveler fails to raise a complaint about any errors or irregularities, it shall be deemed that the traveler has consented to and accepted such service and they lose any right to subsequent claims or complaints. The traveler can file a written complaint within two months after the service has been provided incorrectly, otherwise they shall not be accepted and processed by GoBook d.o.o. Visoko. The complaint must be well founded and supported. Therefore, together with their complaint the traveler must enclose appropriate evidence and/or adequate confirmation by the hotel operator, transport operator or some other competent person as to the facts based on which the traveler wants to realize his/her claim. Within 15 days from receiving the complaint, GoBook d.o.o. Visoko is bound to make a written response. If it is a simple omission where the error has been indisputably committed (even if the traveler failed to provide all the necessary documents within the specified deadline) GoBook d.o.o. Visoko is bound to accept and comply with the complaint claim. If the error is not simple, GoBook d.o.o. Visoko is bound to investigate all the circumstances which have led to such an error. GoBook d.o.o. Visoko is entitled to postpone dispute resolution for another 15 days in order to collect all the necessary information and check all the claims with the service provider. Until GoBook d.o.o. Visoko makes a decision, and not longer than 30 days after the written complaint is filed, the tour operator and the traveler waive any mediation by any\n' +
    'other institution or court and shall refrain from releasing any information to the media. Also, during the course of the said 30-day period, the tour operator and the traveler waive their right to any lawsuits.\n' +
    'The amount of damages, in case that program has not been carried out or a service provided due to any mistake or error committed by GoBook d.o.o. Visoko, shall be restricted by the amount paid for the tour and by the realistic value of services which have not been provided. This provision does not apply to cases when GoBook d.o.o. Visoko has the right to cancel the tour or change the tour program in accordance with the provisions of these terms and conditions and applicable laws.\n' +
    'Regardless of the complaint filed, the traveler must settle all the bills and invoices issued for the services provided in accordance with the agreed payment schedule, any potential damages shall be paid into the travelers personal bank account upon conclusion of the complaint procedure.\n' +
    '\n' +
    '__OBLIGATIONS OF GOBOOK d.o.o. VISOKO__\n' +
    '\n' +
    'GoBook d.o.o. Visoko shall select service providers with due care and attention and in\n' +
    'accordance with the positive business customs. The company shall take care of the travelers’ rights with due care and in accordance with the positive business customs in the field of tourism.\n' +
    'GoBook d.o.o. Visoko is bound to provide to travelers all the services agreed for a specific package tour as well as to provide all the answers in case it fails to provide a part of or a full service. GoBook d.o.o. Visoko shall carry out all its obligations specified in a particular tour program as they are described therein, except in case of “force majeure” or changed circumstances. In case when it is prevented to provide service specified in the package tour program, GoBook d.o.o. Visoko shall not be held liable or responsible. GoBook d.o.o. Visoko is not bound to provide any services beyond these terms and conditions. GoBook d.o.o. Visoko shall not be held liable or responsible for printing errors.\n' +
    '\n' +
    '__OBLIGATIONS OF TRAVELERS__\n' +
    '\n' +
    'The travelers are bound to make sure to personally meet all the requirements provided for by regulations of Bosnia and Herzegovina and any other country in which the tour take place or goes through, as well as to abide by the rules and regulations of hotels and other facilities and to cooperate with representatives of the tour operator and service providers. The travelers themselves shall be held solely responsible for any damages they cause, particularly for damages resulting from their failure to abide by the contract and these general terms and conditions. The travelers shall pay for any damages that they have caused immediately at the hotel reception or at some other place designated by the legal entity or natural person that have sustained the aforementioned damages.\n' +
    'GoBook d.o.o. Visoko shall deem that the traveler has read and fully accepted the General Terms and Conditions when they sign the contract and when they make the deposit.\n' +
    '\n' +
    '__PERSONAL DATA PROTECTION__\n' +
    '\n' +
    'Travelers provide their personal information to GoBook d.o.o. Visoko of their own free will. GoBook d.o.o. Visoko needs the said personal information in order to provide the requested services, and GoBook d.o.o. Visoko hereby undertakes to use such information only for mutual communication and not to release or disclose the travelers’ personal information to any third parties except for the express purposes of carrying out agreed package tours. The only exception in which personal details can be provided to third parties is taking out insurance policies against the risk of cancelation, insurance against accidents or health conditions, baggage insurance and travel insurance. If a traveler takes out an insurance policy his/her personal details shall be provided to the insurance company. The travelers’ personal details shall be stored and kept in\n' +
    'data base in accordance with the decision of the Company’s management on the method of\n' +
    'collecting, processing and storing personal data of travelers. The parties give their express consent for their personal details to be used for marketing purposes by GoBook d.o.o. Visoko.\n' +
    '\n' +
    '__FINAL PROVISIONS__\n' +
    '\n' +
    'These General Terms and Conditions constitute and integral part of any contract signed. By signing a contract, the traveler fully accepts the defined package tour as well as the\n' +
    'aforementioned terms and conditions.'
