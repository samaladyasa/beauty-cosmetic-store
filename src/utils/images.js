export const reliableImages = [
    3762879, 3738348, 3373740, 3621234, 2536965, 3059609,
    5938242, 3373725, 4041392, 4158292, 2865482, 2747600
].map(id => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`);

export const getReliableImage = (index = 0) => reliableImages[index % reliableImages.length];

export const handleImageError = (event) => {
    const image = event.currentTarget;
    if (image.dataset.fallbackApplied === 'true') return;
    image.dataset.fallbackApplied = 'true';
    image.src = getReliableImage(image.dataset.imageIndex || 0);
    image.srcset = '';
    image.onerror = null;
};

export const getShadeTint = (shade = '') => {
    const name = shade.toLowerCase();
    if (name.includes('red') || name.includes('berry') || name.includes('plum') || name.includes('cherry')) return 'rgba(123, 38, 48, 0.18)';
    if (name.includes('peach') || name.includes('coral') || name.includes('rose') || name.includes('pink')) return 'rgba(221, 117, 101, 0.16)';
    if (name.includes('honey') || name.includes('almond') || name.includes('beige')) return 'rgba(176, 116, 67, 0.16)';
    if (name.includes('mocha') || name.includes('brown') || name.includes('mauve')) return 'rgba(90, 52, 45, 0.2)';
    if (name.includes('black') || name.includes('raven')) return 'rgba(20, 20, 20, 0.2)';
    return 'rgba(250, 249, 246, 0.08)';
};
