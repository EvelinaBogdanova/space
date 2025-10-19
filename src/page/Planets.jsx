import React from 'react';

function Planets() {
    const planets = [
        {
            name: "Меркурий",
            description: "Ближайшая к Солнцу планета с экстремальными перепадами температур.",
            facts: ["Температура от -173°C до 427°C", "Один год = 88 земных дней", "Нет атмосферы"],
            image: "https://naked-science.ru/wp-content/uploads/2016/08/field_image_1462408088_mercury.jpg"
        },
        {
            name: "Венера",
            description: "Самая горячая планета в Солнечной системе с плотной атмосферой.",
            facts: ["Температура поверхности 462°C", "Атмосферное давление в 92 раза больше земного", "Вращается в обратном направлении"],
            image: "https://static1-repo.aif.ru/1/b4/3042003/8c6f2781e75740d18e525226498fde4e.webp"
        },
        {
            name: "Земля",
            description: "Наш дом - единственная известная планета с жизнью во Вселенной.",
            facts: ["71% поверхности покрыто водой", "Магнитное поле защищает от космического излучения", "Единственный естественный спутник - Луна"],
            image: "https://yt3.googleusercontent.com/iJsTHESCKivPR7g2IcQk28L8L3EdN6pDtKCWgoSFRNlU9M603-ADlPMPB7SPHCshw9qz7y_83Uw=s900-c-k-c0x00ffffff-no-rj"
        },
        {
            name: "Марс",
            description: "Красная планета, которая когда-то могла иметь реки и океаны.",
            facts: ["Самая высокая гора в Солнечной системе - Олимп", "Имеет полярные ледяные шапки", "Два спутника: Фобос и Деймос"],
            image: "https://avatars.mds.yandex.net/i?id=cd2ea28cd7f871cc9e6a928526db4ba1_l-8276139-images-thumbs&n=13"
        },
        {
            name: "Юпитер",
            description: "Самая большая планета - газовый гигант с мощными штормами.",
            facts: ["Масса в 2.5 раза больше всех других планет вместе", "Большое красное пятно - гигантский шторм", "79 известных спутников"],
            image: "https://i.pinimg.com/originals/6a/ce/56/6ace56262e78c0560a706c72510e7b4a.jpg"
        },
        {
            name: "Сатурн",
            description: "Планета с самыми впечатляющими кольцами в Солнечной системе.",
            facts: ["Кольца состоят изо льда и камней", "Меньшая плотность чем у воды", "82 спутника, включая Титан"],
            image: "https://avatars.mds.yandex.net/i?id=cb8b45027f3a71eeab7f7e8d8ee7008c_l-5879086-images-thumbs&n=13"
        }
    ];

    return (
        <div style={{padding: '20px', maxWidth: '1400px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '40px'}}>
                <h1 style={{color: '#1e3a8a', fontSize: '3rem', marginBottom: '20px'}}>🪐 Планеты Солнечной Системы 🪐</h1>
                <p style={{fontSize: '1.2rem', color: '#64748b', lineHeight: '1.6'}}>
                    Откройте удивительные миры, вращающиеся вокруг нашего Солнца
                </p>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px'}}>
                {planets.map((planet, index) => (
                    <div key={index} style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '20px',
                        padding: '25px',
                        color: 'white',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        <div style={{textAlign: 'center', marginBottom: '20px'}}>
                            <h3 style={{fontSize: '1.8rem', marginBottom: '10px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                                {planet.name}
                            </h3>
                            <img 
                                src={planet.image} 
                                alt={planet.name}
                                style={{
                                    width: '100%', 
                                    height: '200px', 
                                    objectFit: 'cover', 
                                    borderRadius: '15px',
                                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                                }}
                            />
                        </div>
                        
                        <p style={{
                            fontSize: '1.1rem', 
                            lineHeight: '1.6', 
                            marginBottom: '20px',
                            textAlign: 'center'
                        }}>
                            {planet.description}
                        </p>
                        
                        <div style={{
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '10px',
                            padding: '15px'
                        }}>
                            <h4 style={{fontSize: '1.2rem', marginBottom: '10px', textAlign: 'center'}}>
                                🌟 Интересные Факты
                            </h4>
                            <ul style={{listStyle: 'none', padding: 0}}>
                                {planet.facts.map((fact, factIndex) => (
                                    <li key={factIndex} style={{
                                        padding: '8px 0',
                                        borderBottom: '1px solid rgba(255,255,255,0.2)',
                                        fontSize: '0.95rem'
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
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                padding: '40px',
                borderRadius: '20px',
                textAlign: 'center',
                color: 'white',
                marginTop: '40px',
                boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
            }}>
                <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>🌌 Солнечная Система 🌌</h2>
                <p style={{fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto'}}>
                    Наша Солнечная система - это удивительная коллекция из 8 планет, вращающихся вокруг центральной звезды - Солнца. 
                    Каждая планета поистине уникальна и имеет свои особенности, что делает их изучение захватывающим приключением.
                </p>
                <img 
                    src="https://img.freepik.com/premium-photo/diagram-portrayal_837074-2398.jpg" 
                    alt="Солнечная система"
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

export default Planets;