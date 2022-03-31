# SW-Galaxy-Map-2

My contribution to the Star Wars Galactic Map family of software, and the sequel to my previous work SW-Galaxy-Map, now written in HTML/CSS and Javascript. Credit goes to the creator of the original map image and the owners of Star Wars.

# Disclaimer

This is only a Star Wars program thanks to the awesome map picture discussed below, technically any map(image) can be put into the HTML canvas and "trade routes"(paths) drawn on there.

# Description

This program is currently under construction, UI elements are currently dedicated to the construction effort so many changes are expected.

The Star Wars lore that I came to love is deep and connected, like the trade routes connecting solar systems across the Galaxy. Fans worldwide have contributed lovingly to fansites like Wookiepedia and others, simulating hyperspace through hyperlinks. However, maps of the Star Wars universe that connect the lore to the Galactic Map often require high-performace, which can be hard to impossible to acquire in unfavorable economic or technological conditions. UI elements that offer high immersion value come at the cost of accessibility. I would like to provide a software that can be used for World-Building for all people on Earth.

In the field of Cartography, map projection is roughly the concept of taking a 3-dimensional world and interpreting it into a 2-dimensional map. A common example of this is that a flattened orange peel cannot be shaped like a rectangle (when fully intact and continuous). I have the utmost respect for people who make maps, and unfortunately not all maps are easily available. When I made the first iteration of this program, there were a wealth of low quality sources that were at least quite complete, now they are more commonly available as website experiences rather than images but the fanbase has put the work in and this map was posted in a reddit thread. Credit goes to that reddit user and the individuals credited in the picture for the picture. I used Waifu2x to upscale the image resolution.

# Planned Features:
- Shortest Path (Hyperspace + Subspace)
- Trade Routes
- Map Node Overlays
  - Territories
  - Demographics/Resources
- Map View Overlays
  - Nearest Point of Interest to cursor
  - Lookup Nearest Point of Interest to cursor
  - Control Panel Modal
- Mobile Friendly
- Offline Friendly

# Construction:
- Shortest Path:
    Until all nodes have been plotted, there could be some changes. Unfortunately after some digging around I have not found a clear way to implement Hyperspace/Subspace travel. The issue is that somehow using a gravity well to turn is faster than dropping out of hyperspace to change direction, but if and by how much faster/slower that is than just flying straight to a destination in hyperspace I do not know.
    For now I will just implement with a small list of nearest systems to bunnyhop to, with a required minimum delta theta so you wouldn't fly through a sun. 
- Trade Routes:
    Once shortest path is implemented, trade routes paths would have an arbitrarily lower weight.
- Map Node Overlays:
    Currently drawing on canvas for construction, will probably use this technique.
  - Territories:
      Other maps have done this very well, just like them this will require a slider for time period.
  - Demographics/Resources:
      When the program is more built out this might be a feature or an idea for a fork.
- Map View Overlays:
  - Nearest Point of Interest to cursor:
      Working but as a canvas, not a modal.
  - Lookup Nearest Point of Interest to cursor:
      Currently Wookiepedia lookup in a sandboxed iframe in an overlay modal
  - Control Panel Modal:
      Will contain switches for each feature.
- Mobile Friendly:
      Need to make scrolling and clicking make coexist in a touch screen environment. (Currently not coexisting)
      
- Offline Friendly:
    Add support for lookup in a Wookiepedia database backup. Will require a custom solution to move through the XML file, but it would be worthwhile to try.
