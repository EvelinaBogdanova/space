import React from 'react';

function Home() {
    return (
        <div style={{padding: '20px', maxWidth: '1200px', margin: '0 auto'}}>
            <div style={{textAlign: 'center', marginBottom: '40px'}}>
                <h1 style={{color: '#1e3a8a', fontSize: '3rem', marginBottom: '20px'}}>Космический Мир</h1>
                <p style={{fontSize: '1.2rem', color: '#64748b', lineHeight: '1.6'}}>
                    Добро пожаловать в захватывающее путешествие по бескрайности космоса!
                </p>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px'}}>
                <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    padding: '30px',
                    borderRadius: '15px',
                    color: 'white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}>
                    <h3 style={{fontSize: '1.5rem', marginBottom: '15px'}}>🪐 Планеты</h3>
                    <p style={{lineHeight: '1.6'}}>
                        Исследуйте удивительные миры нашей Солнечной системы. 
                        От пылающего Меркурия до ледяного Нептуна - каждая планета 
                        имеет свои уникальные особенности и тайны.
                    </p>
                    <img 
                        src="https://i.pinimg.com/originals/3e/be/9f/3ebe9f5a7dd1c8d4750f4212c36da809.jpg" 
                        alt="Планеты Солнечной системы"
                        style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px', marginTop: '15px'}}
                    />
                </div>

                <div style={{
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    padding: '30px',
                    borderRadius: '15px',
                    color: 'white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}>
                    <h3 style={{fontSize: '1.5rem', marginBottom: '15px'}}>🚀 Космические Станции</h3>
                    <p style={{lineHeight: '1.6'}}>
                        Познакомьтесь с историей и технологиями космических станций. 
                        От легендарной станции "Мир" до современной МКС - 
                        узнайте о жизни космонавтов на орбите.
                    </p>
                    <img 
                        src="https://img5tv.cdnvideo.ru/webp/shared/files/202507/1_2317319.jpg" 
                        alt="Международная космическая станция"
                        style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px', marginTop: '15px'}}
                    />
                </div>

                <div style={{
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    padding: '30px',
                    borderRadius: '15px',
                    color: 'white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}>
                    <h3 style={{fontSize: '1.5rem', marginBottom: '15px'}}>🔬 Научные Факты</h3>
                    <p style={{lineHeight: '1.6'}}>
                        Откройте невероятные факты о космосе! 
                        Черные дыры, нейтронные звезды, темная материя - 
                        познайте величайшие тайны Вселенной.
                    </p>
                    <img 
                        src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=200&fit=crop" 
                        alt="Космические объекты"
                        style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px', marginTop: '15px'}}
                    />
                </div>
            </div>

            <div style={{
                background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                padding: '40px',
                borderRadius: '20px',
                textAlign: 'center',
                color: 'white',
                boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
            }}>
                <h2 style={{fontSize: '2rem', marginBottom: '20px'}}>🌟 Начало Путешествия 🌟</h2>
                <p style={{fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto'}}>
                    Наш сайт - это ваш портал в невероятный мир космических открытий. 
                    Каждая страница содержит уникальную информацию, прекрасные изображения и 
                    интересные факты, которые расширят ваши знания о Вселенной.
                </p>
                <img 
                    src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=300&fit=crop" 
                    alt="Космический пейзаж"
                    style={{width: '100%', maxWidth: '600px', height: '200px', objectFit: 'cover', borderRadius: '15px', marginTop: '25px'}}
                />
            </div>
        </div>
    );
}

export default Home;
