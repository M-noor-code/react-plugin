import React, { useState, useEffect } from "react";
import axios from "axios";
const NewSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [plugins, setPlugins] = useState([]);
  const [filteredPlugins, setFilteredPlugins] = useState([]);

  useEffect(() => {
    const fetchPlugins = async () => {
      try {
        const response = await axios.get(
          "https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request"
        );
        setPlugins(response.data.plugins);
        console.log(response.data.plugins);
      } catch (error) {
        console.error("Error fetching plugins:", error);
      }
    };

    fetchPlugins();
  }, []);
  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter plugins based on search term
    const filtered = plugins.filter((plugin) =>
      plugin.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPlugins(filtered);
  };

  return (
    <>
    <div>
    <input
      type="text"
      placeholder="Search for a plugin..."
      value={searchTerm}
      onChange={handleChange}
    />
    {searchTerm && (
      <ul>
        {filteredPlugins.map((plugin, index) => (
          <li key={index}>{plugin.name}</li>
        ))}
      </ul>
    )}
  </div>
    </>
  );
};

export default NewSearch;
