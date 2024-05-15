import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
const SlugSearch = () => {
    const [pluginDetails, setPluginDetails] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchPluginDetails = async () => {
      try {
        const response = await axios.get(`https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=${slug}`);
        setPluginDetails(response.data);
        console.log(response.data,"<=new thing checking")
      } catch (error) {
        console.error('Error fetching plugin details:', error);
      }
    };

    fetchPluginDetails();
  }, [slug]);

  if (!pluginDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div>
    <h2>{pluginDetails.name}</h2>
    <p>{pluginDetails.description}</p>
    <p>Version: {pluginDetails.version}</p>
    <p>Rating: {pluginDetails.rating}</p>
    <a href={pluginDetails.download_link}>Download</a>
  </div>
  )
}

export default SlugSearch