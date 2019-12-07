import numpy as np
import networkx as nx
 
orbits = []

# build graph
G = nx.Graph()
for o in orbits:
    G.add_edge(o[:3], o[4:], weight=1)
 
# Get dists from COM to all planets
totalDists = np.sum(list(nx.single_source_shortest_path_length(G, "COM").values()))
you2santa = (nx.shortest_path_length(G, "YOU","SAN")-2)
 
print(totalDists)
print(you2santa)
