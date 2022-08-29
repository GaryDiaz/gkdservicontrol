import "../../node_modules/metro4/build/css/metro-icons.min.css";
import { CommandButton } from "./metroform/CommandButton";
import { InputMaterial } from "./metroform/InputMaterial";

export const Login = () => {
  return (
    <div className="grid">
      <div className="row">
        <div className="card cell-sm-full cell-md-half">
          <div className="card-header">
            <h2 className="text-center">
              <i className="bi bi-box-arrow-in-left"></i> Iniciar Sesión
            </h2>
          </div>
          <div className="card-content p-8">
            <form>
              <InputMaterial
                type="text"
                placeholder="Ingrese su Nick"
                icon="bi-person-lines-fill"
                label="Nick"
                notificacion="Ingresa un Nick válido"
                tipoNotificacion={true}
                nombreColor="darkTeal"
              />
              <InputMaterial
                type="password"
                placeholder="Clave"
                icon="bi-key-fill"
                label="Clave"
                notificacion="Ingrese su clave"
                tipoNotificacion={true}
                nombreColor="darkTeal"
              />
            </form>
          </div>
          <div className="card-footer d-flex flex-justify-end">
            <CommandButton
              icon="bi-box-arrow-in-right"
              titulo="Login"
              subtitulo="Iniciar Sesión"
            />
          </div>
        </div>
        <div
          className="cell-md-half"
          style={{
            height: "370px",
            backgroundImage: "url('/images/gkdservicontrol-marca370px.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};
