import requests
import random
import time

# URL pública de tu API (ajusta si cambia)
API_URL = "https://special-fortnight-6jjww47q4g725w6w-5000.app.github.dev/levels"

# ID del estanque (ya creaste uno con ID 1)
TANK_ID = 1

# Función para generar un valor aleatorio simulado
def generar_nivel():
    return round(random.uniform(50.0, 80.0), 2)  # entre 50.0 y 80.0 cm

# Enviar datos continuamente cada X segundos
def iniciar_simulacion(intervalo=10):
    print(f"🔁 Enviando datos cada {intervalo} segundos...\n")
    while True:
        nivel = generar_nivel()
        payload = {
            "tank_id": TANK_ID,
            "level_cm": nivel
        }
        try:
            response = requests.post(API_URL, json=payload)
            if response.status_code == 201:
                print(f"✅ Nivel enviado: {nivel} cm")
            else:
                print(f"⚠️ Error al enviar: {response.status_code} - {response.text}")
        except Exception as e:
            print(f"❌ Error de conexión: {e}")
        
        time.sleep(intervalo)

if __name__ == "__main__":
    iniciar_simulacion()
