import { useEffect } from 'react';

const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // Update Title
    const baseTitle = "Hotel Maria International | Luxury Hotel in Kothamangalam";
    document.title = title ? `${title} | Hotel Maria International` : baseTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || "Experience luxury and comfort at Hotel Maria International, the premier hotel in Kothamangalam. Offering elegantly designed rooms, fine dining, and modern amenities.");

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords || "Hotel Maria International, Kothamangalam Hotel, Luxury Accommodation, Kerala Tourism, Best Hotel in Kothamangalam, Rooms, Suits, Restaurant");

    // Optional: Update OG tags if needed
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title ? `${title} | Hotel Maria International` : baseTitle);
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description || "Experience luxury and comfort at Hotel Maria International.");

  }, [title, description, keywords]);

  return null;
};

export default SEO;
