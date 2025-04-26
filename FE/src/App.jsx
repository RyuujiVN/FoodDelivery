import { ConfigProvider } from "antd";
import AllRoute from "~/components/AllRoute/AllRoute";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#EB5757",
            fontSize: 16,
          },

          components: {
            Typography: {
              
            },
          },
        }}
      >
        <AllRoute />
      </ConfigProvider>
    </>
  );
}

export default App;
