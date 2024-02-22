import {Menu} from 'antd';
import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {GithubOutlined, TwitterOutlined, CaretDownOutlined} from "@ant-design/icons";
import './index.css'
import {getEthPrice} from "@utils";
import price from "@utils/price.js";

const EthPrice = () => {
    const [ethUsdPrice, setEthPrice] = useState(null);
    useEffect(() => {
        const fetchPrice = async () => {
            const price = await getEthPrice();
            setEthPrice(price);
        };
        fetchPrice();
        const interval = setInterval(fetchPrice, 60000);
        return () => clearInterval(interval);
    }, []);
    if (ethUsdPrice === null) {
        return <div>Loading ETH Price...</div>;
    }
    price.ETH = ethUsdPrice;
    return <div>ETH Price: ${ethUsdPrice}</div>
}
const MenuHeader = () => {
    const items = [
        {
            label: 'Overview',
            key: 'overview',
        },
        {
            label: <span>zkSync <CaretDownOutlined /></span>,
            key: 'zks',
            children: [
                {
                    label: 'zkSync',
                    key: 'zksync',
                },
                {
                    label: 'zkSyncTasks',
                    key: 'zksyncTasks',
                },
                {
                    label: 'zkRank',
                    key: 'zkRank',
                },
            ],
        },
        {
            label: <span>Linea <CaretDownOutlined /></span>,
            key: 'lin',
            children: [
                {
                    label: 'Linea',
                    key: 'linea',
                },
                {
                    label: 'LineaTasks',
                    key: 'lineaTasks',
                },
            ],
        },
        {
            label: <span>Base <CaretDownOutlined /></span>,
            key: 'basechain',
            children: [
                {
                    label: 'Base',
                    key: 'base',
                },
                {
                    label: 'BaseTasks',
                    key: 'baseTasks',
                },
            ],
        },
        {
            label: 'Scroll',
            key: 'scroll',
        },
        {
            label: 'LayerZero',
            key: 'layer',
        },
        {
            label: 'Deposit',
            key: 'deposit',
        },
        {
            label: <span>Defi看板 <CaretDownOutlined /></span>,
            key: 'Dashboards',
            children: [
                // {
                //     label: 'Mirror',
                //     key: 'mirror',
                // },
                {
                    label: <a href="https://defillama.com/" target="_blank"
                      rel="noopener noreferrer">DefiLlama</a>,
                    key: 'defillama',
                },
                {
                    label: <a href="https://dune.com/browse/dashboards/" target="_blank"
                      rel="noopener noreferrer">Dune</a>,
                    key: 'dune',
                }
            ],
        },
        {
            label: <a href="https://github.com/guanzhenxing/MyWalletScan" target="_blank"
                      rel="noopener noreferrer"><GithubOutlined/></a>,
            key: 'github',
        },
        {
            label: <EthPrice/>,
            key: 'ethPrice',
        }
    ];
    const navigate = useNavigate();
    const location = useLocation();
    const [current, setCurrent] = useState(location.pathname.replace('/', '') || 'overview');
    const onClick = (e) => {
        setCurrent(e.key);
    };
    useEffect(() => {
        if (location.pathname.replace('/', '') === 'twitter' || location.pathname.replace('/', '') === 'github') {
            return;
        }
        setCurrent(location.pathname.replace('/', '') || 'overview');
    }, [location.pathname]);

    useEffect(() => {
        if (current === 'twitter' || current === 'github') {
            return;
        }
        navigate(`/${current}`);
    }, [current]);

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}
            className="custom-menu"
            items={items}
        >
        </Menu>
    );

};
export default MenuHeader;
