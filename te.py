import pandas as pd
import matplotlib.pyplot as plt

# leer archivo csv
datos = pd.read_csv('archivo.csv') 

# depurar los datos para poder leerlos correctamente 
datos = datos.dropna() 
datos = datos.drop_duplicates() 
datos = datos[datos['column'] != 0] 

# convertir los datos en un dataframe para visualizarlo en matplotlib 
df = pd.DataFrame(datos) 
df.columns = ['col1', 'col2', 'col3']  # nombre de las columnas del dataframe  
df.set_index('col1', inplace=True) # establecer la columna 1 como índice del dataframe  

 # visualización de los datos con matplotlib  
plt.figure(figsize=(10,8))  
plt.plot(df)   # graficar el dataframe  
plt.title('Visualización de Datos') # título del gráfico  
plt.xlabel('Columna 1') # etiqueta eje x  
plt.ylabel('Columna 2 y 3') # etiqueta eje y   

plt.show()