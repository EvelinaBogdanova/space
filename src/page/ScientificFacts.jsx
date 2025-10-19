import React, { useState } from 'react';

function ScientificFacts() {
    const [selectedCategory, setSelectedCategory] = useState('general');

    const factsData = {
        general: [
            {
                title: "Масса Солнца",
                fact: "Солнце составляет 99.86% от общей массы Солнечной системы",
                description: "Все остальные объекты - планеты, астероиды, кометы - составляют лишь 0.14% от общей массы.",
                image: "https://i.ytimg.com/vi/gBVIH_MnW7Y/maxresdefault.jpg"
            },
            {
                title: "Звук в космосе",
                fact: "В космосе нет звука",
                description: "Звук требует среды для распространения, а космос - это вакуум без молекул.",
                image: "https://avatars.mds.yandex.net/i?id=dd7c5e24d770efbb2bd2e69fad14c30b_l-5276035-images-thumbs&n=13"
            },
            {
                title: "Скорость света",
                fact: "Свет путешествует со скоростью 299,792,458 метров в секунду",
                description: "Это самая быстрая скорость во Вселенной. За одну секунду свет может облететь Землю 7.5 раз.",
                image: "https://avatars.mds.yandex.net/get-znatoki-cover/1220555/2a0000017366549a1187e562aad259eb7dd5/orig"
            },
            {
                title: "Возраст Вселенной",
                fact: "Вселенной приблизительно 13.8 миллиардов лет",
                description: "Это время, прошедшее от Большого Взрыва до сегодняшнего дня.",
                image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=250&fit=crop"
            }
        ],
        planets: [
            {
                title: "День на Венере",
                fact: "Один день на Венере длится дольше одного года",
                description: "Венера вращается вокруг своей оси за 243 земных дня, а вокруг Солнца за 225 дней.",
                image: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_665590ceb563d67f9afbfec1_6656ddaa055ea57607b0468c/scale_1200"
            },
            {
                title: "Спутники Юпитера",
                fact: "У Юпитера более 80 спутников",
                description: "Самые большие спутники - Ио, Европа, Ганимед и Каллисто, открытые Галилеем в 1610 году.",
                image: "https://naked-science.ru/wp-content/uploads/2022/10/1636025565astro_21-44.jpeg"
            },
            {
                title: "Гора Олимп",
                fact: "Самая высокая гора в Солнечной системе находится на Марсе",
                description: "Гора Олимп высотой 21.9 км - это вулкан, который в 2.5 раза выше Эвереста.",
                image: "https://i.pinimg.com/originals/d5/27/6d/d5276d41a5456d8eb08c29287078c7ef.jpg"
            },
            {
                title: "Кольца Сатурна",
                fact: "Кольца Сатурна состоят из миллионов частиц льда",
                description: "Кольца толщиной всего 10-1000 метров, но простираются на 282,000 км от планеты.",
                image: "https://fsd.multiurok.ru/html/2021/09/22/s_614b2b952fdfc/phpe1eKZL_Pro-Saturn.-Kalgashkin-Vyacheslav_html_910199a0045d00e3.jpg"
            }
        ],
        stars: [
            {
                title: "Звезды во Вселенной",
                fact: "В видимой Вселенной приблизительно 10^24 звезд",
                description: "Это число с 24 нулями - больше звезд, чем песчинок на всех пляжах Земли.",
                image: "https://avatars.mds.yandex.net/i?id=33da806f2060bcae8794dc0b611d958c_l-9214146-images-thumbs&n=13"
            },
            {
                title: "Черные дыры",
                fact: "Черные дыры могут излучать энергию",
                description: "Явление Хокинга позволяет черным дырам излучать частицы и терять массу.",
                image: "https://i.pinimg.com/originals/a0/34/8b/a0348b75541ddcaa75331995f5ecb9ec.jpg"
            },
            {
                title: "Нейтронные звезды",
                fact: "Одна чайная ложка вещества нейтронной звезды весила бы миллиард тонн",
                description: "Нейтронные звезды - это остатки массивных звезд после взрыва сверхновой.",
                image: "https://avatars.mds.yandex.net/i?id=a80ff96d8202c5b74e44de485777145e_l-5231853-images-thumbs&n=13"
            },
            {
                title: "Темная материя",
                fact: "Темная материя составляет 27% Вселенной",
                description: "Мы не можем видеть темную материю, но она существует и влияет на движение галактик.",
                image: "https://i.ytimg.com/vi/c8bcUWIbY2A/maxresdefault.jpg"
            }
        ]
    };

    const categories = [
        { key: 'general', name: 'Общие Факты', icon: '🌌' },
        { key: 'planets', name: 'Планеты', icon: '🪐' },
        { key: 'stars', name: 'Звезды и Галактики', icon: '⭐' }
    ];

    return (
        <div style={{padding: '20px', maxWidth: '1400px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '40px'}}>
                <h1 style={{color: '#1e3a8a', fontSize: '3rem', marginBottom: '20px'}}>🔬 Научные Факты о Космосе 🔬</h1>
                <p style={{fontSize: '1.2rem', color: '#64748b', lineHeight: '1.6'}}>
                    Откройте невероятные тайны Вселенной через научные факты
                </p>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '15px',
                marginBottom: '40px',
                flexWrap: 'wrap'
            }}>
                {categories.map((category) => (
                    <button
                        key={category.key}
                        onClick={() => setSelectedCategory(category.key)}
                        style={{
                            padding: '15px 25px',
                            borderRadius: '25px',
                            border: 'none',
                            background: selectedCategory === category.key 
                                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                                : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                            color: 'white',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                        }}
                    >
                        {category.icon} {category.name}
                    </button>
                ))}
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px'}}>
                {factsData[selectedCategory].map((item, index) => (
                    <div key={index} style={{
                        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                        borderRadius: '20px',
                        padding: '25px',
                        color: 'white',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                        transition: 'transform 0.3s ease'
                    }}>
                        <div style={{textAlign: 'center', marginBottom: '20px'}}>
                            <h3 style={{
                                fontSize: '1.6rem', 
                                marginBottom: '15px', 
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                            }}>
                                {item.title}
                            </h3>
                            <img 
                                src={item.image} 
                                alt={item.title}
                                style={{
                                    width: '100%', 
                                    height: '180px', 
                                    objectFit: 'cover', 
                                    borderRadius: '15px',
                                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                                }}
                            />
                        </div>
                        
                        <div style={{
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '10px',
                            padding: '15px',
                            marginBottom: '15px'
                        }}>
                            <h4 style={{
                                fontSize: '1.3rem', 
                                marginBottom: '10px',
                                textAlign: 'center',
                                color: '#ffd700'
                            }}>
                                ⚡ Факт
                            </h4>
                            <p style={{
                                fontSize: '1.1rem', 
                                lineHeight: '1.5',
                                textAlign: 'center',
                                fontWeight: 'bold'
                            }}>
                                {item.fact}
                            </p>
                        </div>
                        
                        <div style={{
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '10px',
                            padding: '15px'
                        }}>
                            <h4 style={{
                                fontSize: '1.1rem', 
                                marginBottom: '8px',
                                color: '#e0e0e0'
                            }}>
                                📖 Объяснение
                            </h4>
                            <p style={{
                                fontSize: '0.95rem', 
                                lineHeight: '1.5'
                            }}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                padding: '40px',
                borderRadius: '20px',
                textAlign: 'center',
                color: 'white',
                marginTop: '40px',
                boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
            }}>
                <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>🚀 Наука и Исследования 🚀</h2>
                <p style={{fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto'}}>
                    Каждый день ученые делают новые открытия, которые расширяют наши знания о Вселенной. 
                    От мельчайших частиц до величайших галактик - космос продолжает удивлять нас своими тайнами.
                </p>
                <img 
                    src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=700&h=350&fit=crop" 
                    alt="Космические исследования"
                    style={{
                        width: '100%', 
                        maxWidth: '700px', 
                        height: '250px', 
                        objectFit: 'cover', 
                        borderRadius: '15px', 
                        marginTop: '25px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                    }}
                />
            </div>
        </div>
    );
}

export default ScientificFacts;
