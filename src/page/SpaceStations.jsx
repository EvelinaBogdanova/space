import React from 'react';

function SpaceStations() {
    const stations = [
        {
            name: "Международная космическая станция (МКС)",
            description: "Самая большая космическая станция, являющаяся результатом международного сотрудничества.",
            details: {
                launch: "1998 год",
                orbit: "400 км над Землей",
                crew: "6-7 космонавтов",
                countries: "15 стран-участниц"
            },
            facts: [
                "Скорость полета: 28,000 км/ч",
                "Полный оборот вокруг Земли: 90 минут",
                "Стоимость: свыше 100 миллиардов долларов",
                "Масса: 450 тонн"
            ],
            image: "https://avatars.mds.yandex.net/i?id=993a2c7acda842715a571c3337783de6_l-8375627-images-thumbs&n=13",
            history: "МКС - это символ международного сотрудничества в космосе. Станция постоянно обитаема с 2000 года и служит лабораторией для научных исследований."
        },
        {
            name: "Станция 'Мир'",
            description: "Советская космическая станция, которая была первой модульной станцией.",
            details: {
                launch: "1986 год",
                orbit: "354-374 км над Землей",
                crew: "2-3 космонавта",
                countries: "СССР/Россия"
            },
            facts: [
                "Работала 15 лет",
                "Приняла 104 космонавтов",
                "Сгорела в атмосфере в 2001 году",
                "Масса: 130 тонн"
            ],
            image: "https://i.pinimg.com/originals/05/ed/86/05ed86673477c3994074b946442a1b01.jpg",
            history: "Мир была первой космической станцией модульного типа и послужила основой для разработки МКС. На ней было установлено множество рекордов продолжительности полета."
        },
        {
            name: "Китайская космическая станция 'Тяньгун'",
            description: "Современная китайская космическая станция, активно развивающаяся.",
            details: {
                launch: "2021 год",
                orbit: "340-450 км над Землей",
                crew: "3 космонавта",
                countries: "Китай"
            },
            facts: [
                "Состоит из трех модулей",
                "Планируется до 2024 года",
                "Научная лаборатория",
                "Масса: 100 тонн"
            ],
            image: "https://cdnstatic.rg.ru/uploads/images/2023/05/06/tiangong_space_station_rendering_20221101_dff.jpg",
            history: "Тяньгун представляет новую эру китайской космонавтики. Станция демонстрирует растущие возможности Китая в космических технологиях."
        },
        {
            name: "Скайлаб (США)",
            description: "Американская космическая станция, запущенная в 1970-х годах.",
            details: {
                launch: "1973 год",
                orbit: "435 км над Землей",
                crew: "3 астронавта",
                countries: "США"
            },
            facts: [
                "Работала 6 лет",
                "Приняла 9 астронавтов",
                "Сгорела в атмосфере в 1979 году",
                "Масса: 77 тонн"
            ],
            image: "https://i.ytimg.com/vi/3TmNQB29onM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYACpAWKAgwIABABGCwgUSh_MA8=&rs=AOn4CLACN9MrHiF6Is3yMHk5LIV2o1-O1A",
            history: "Скайлаб была первой американской космической станцией и продемонстрировала возможности длительного пребывания людей в космосе."
        },
        {
            name: "Салют (СССР)",
            description: "Серия советских космических станций первого поколения.",
            details: {
                launch: "1971-1982 годы",
                orbit: "200-350 км над Землей",
                crew: "2-3 космонавта",
                countries: "СССР"
            },
            facts: [
                "7 станций серии Салют",
                "Первая станция с людьми",
                "Основа для станции Мир",
                "Научные исследования"
            ],
            image: "https://avatars.mds.yandex.net/i?id=53169b0c1d82e1c76e434cc203c4b9e7_l-9181986-images-thumbs&n=13",
            history: "Программа Салют стала первым шагом в создании постоянных космических станций и заложила основы для будущих международных проектов."
        }
    ];

    return (
        <div style={{padding: '20px', maxWidth: '1400px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '40px'}}>
                <h1 style={{color: '#1e3a8a', fontSize: '3rem', marginBottom: '20px'}}>🚀 Космические Станции 🚀</h1>
                <p style={{fontSize: '1.2rem', color: '#64748b', lineHeight: '1.6'}}>
                    Исследуйте историю и технологии космических станций, вращающихся вокруг Земли
                </p>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px'}}>
                {stations.map((station, index) => (
                    <div key={index} style={{
                        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                        borderRadius: '20px',
                        padding: '30px',
                        color: 'white',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                        transition: 'transform 0.3s ease'
                    }}>
                        <div style={{textAlign: 'center', marginBottom: '25px'}}>
                            <h3 style={{
                                fontSize: '1.8rem', 
                                marginBottom: '15px', 
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                            }}>
                                {station.name}
                            </h3>
                            <img 
                                src={station.image} 
                                alt={station.name}
                                style={{
                                    width: '100%', 
                                    height: '220px', 
                                    objectFit: 'cover', 
                                    borderRadius: '15px',
                                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                                }}
                            />
                        </div>
                        
                        <div style={{
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '10px',
                            padding: '20px',
                            marginBottom: '20px'
                        }}>
                            <h4 style={{
                                fontSize: '1.3rem', 
                                marginBottom: '15px',
                                textAlign: 'center',
                                color: '#ffd700'
                            }}>
                                📋 Основная Информация
                            </h4>
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px'}}>
                                <div style={{textAlign: 'center'}}>
                                    <strong>🚀 Запуск:</strong><br/>
                                    <span style={{fontSize: '0.9rem'}}>{station.details.launch}</span>
                                </div>
                                <div style={{textAlign: 'center'}}>
                                    <strong>🌍 Орбита:</strong><br/>
                                    <span style={{fontSize: '0.9rem'}}>{station.details.orbit}</span>
                                </div>
                                <div style={{textAlign: 'center'}}>
                                    <strong>👥 Экипаж:</strong><br/>
                                    <span style={{fontSize: '0.9rem'}}>{station.details.crew}</span>
                                </div>
                                <div style={{textAlign: 'center'}}>
                                    <strong>🌏 Страны:</strong><br/>
                                    <span style={{fontSize: '0.9rem'}}>{station.details.countries}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div style={{
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '10px',
                            padding: '20px',
                            marginBottom: '20px'
                        }}>
                            <h4 style={{
                                fontSize: '1.2rem', 
                                marginBottom: '12px',
                                color: '#e0e0e0'
                            }}>
                                📖 История
                            </h4>
                            <p style={{
                                fontSize: '0.95rem', 
                                lineHeight: '1.5',
                                marginBottom: '15px'
                            }}>
                                {station.history}
                            </p>
                            <p style={{
                                fontSize: '1rem', 
                                lineHeight: '1.6',
                                fontStyle: 'italic'
                            }}>
                                {station.description}
                            </p>
                        </div>
                        
                        <div style={{
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '10px',
                            padding: '15px'
                        }}>
                            <h4 style={{
                                fontSize: '1.1rem', 
                                marginBottom: '10px',
                                textAlign: 'center',
                                color: '#ffd700'
                            }}>
                                ⭐ Интересные Факты
                            </h4>
                            <ul style={{listStyle: 'none', padding: 0}}>
                                {station.facts.map((fact, factIndex) => (
                                    <li key={factIndex} style={{
                                        padding: '6px 0',
                                        borderBottom: '1px solid rgba(255,255,255,0.2)',
                                        fontSize: '0.9rem'
                                    }}>
                                        • {fact}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '40px',
                borderRadius: '20px',
                textAlign: 'center',
                color: 'white',
                marginTop: '40px',
                boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
            }}>
                <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>🌌 Будущее Космических Станций 🌌</h2>
                <p style={{fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto'}}>
                    Космические станции продолжают развиваться. Планируются новые миссии к Луне и Марсу, 
                    где будут созданы постоянные поселения. Каждая станция - это шаг к звездному будущему человечества.
                </p>
                <img 
                    src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=700&h=350&fit=crop" 
                    alt="Будущее космических станций"
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

export default SpaceStations;
