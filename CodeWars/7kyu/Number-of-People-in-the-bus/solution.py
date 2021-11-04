def number(bus_stops):
    # Good Luck!
    count = 0;
    for stops in bus_stops:
        count = count + stops[0]
        count = count - stops[1]
    return count