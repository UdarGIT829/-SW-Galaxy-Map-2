# SW-Galaxy-Map-2

My contribution to the Star Wars Galactic Map family of software, and the sequel to my previous work SW-Galaxy-Map, now written in HTML/CSS and Javascript. Credit goes to the creator of the original map image and the owners of Star Wars.

# Disclaimer

This is only a Star Wars program thanks to the awesome map picture discussed below, technically any map(image) can be put into the HTML canvas and "trade routes"(paths) drawn on there.

# Description

This program is currently under construction, UI elements are currently dedicated to the construction effort so many changes are expected.

The Star Wars lore that I came to love is deep and connected, like the trade routes connecting solar systems across the Galaxy. Fans worldwide have contributed lovingly to fansites like Wookiepedia and others, simulating hyperspace through hyperlinks. However, maps of the Star Wars universe that connect the lore to the Galactic Map often require high-performace, which can be hard to impossible to acquire in unfavorable economic or technological conditions. UI elements that offer high immersion value come at the cost of accessibility.

In the field of Cartography, map projection is roughly the concept of taking a 3-dimensional world and interpreting it into a 2-dimensional map. A common example of this is that an orange peel cannot be shaped like a rectangle (when fully intact and continuous). I have the utmost respect for people who make maps, and unfortunately not all maps are easily available. When I made the first iteration of this program, there were a wealth of low quality sources that were at least quite complete, now they are not so common but the fanbase has put the work in and this map was posted in a reddit thread. Credit goes to that reddit user and the individuals credited in the picture for the picture.

# Planned Features:
- Shortest Path (Hyperspace + Subspace)
- Trade Routes
- Map Node Overlays
  - Territories
  - Demographics/Resources
- Map View Overlays
  - Nearest Point of Interest to cursor
  - Lookup Nearest Point of Interest to cursor (...)
  - Control Panel Modal
- Mobile Friendly
- Offline Friendly

# Construction:
- Shortest Path (Hyperspace + Subspace)
    Until all nodes have been plotted, there could be some changes.
- Trade Routes
    See Shortest Path.
- Map Node Overlays
    Currently drawing on canvas for construction, will probably use this.
  - Territories
      Other maps have done this very well, just like them this will require a slider for time period.
  - Demographics/Resources
      When the program is more built out this might be a feature or an idea for a fork.
- Map View Overlays
  - Nearest Point of Interest to cursor
      Working but as a canvas, not a modal.
  - Lookup Nearest Point of Interest to cursor (...)
      Currently Wookiepedia lookup in a sandboxed iframe in an overlay modal
  - Control Panel Modal
      Will contain switches for each feature.
- Mobile Friendly
      Need to make scrolling and clicking make coexist in a touch screen environment. (Currently not coexisting)
      
- Offline Friendly
