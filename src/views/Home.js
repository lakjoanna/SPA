import Slider from './Slider';

export function Home() {
    const section = document.createElement('section');
    const img = document.createElement('img');
    img.style.width = '100vw';

    section.innerHTML = `
        <h1 class="name">CYBER SPA</h1>
    `;

    section.append(img);
    section.innerHTML += Slider();
    
    return section;
}
export default Home