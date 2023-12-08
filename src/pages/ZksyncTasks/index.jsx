import {
    Button,
    Input,
    Space,
    Table,
    Modal,
    Form,
    notification,
    Spin,
    Tag,
    Popconfirm,
    Row, Col, InputNumber, Badge, message, Switch, Pagination
} from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons"
import {
    getEthBalance,
    getTxCount,
    getZksEra,
    getZksLite,
    getZkSyncBridge,
    exportToExcel,
    getZksTasks
} from "@utils"
import {useEffect, useState} from "react";
import './index.css';
import {Layout, Card} from 'antd';

const {Content} = Layout;
import {
    DeleteOutlined,
    DownloadOutlined,
    EditOutlined,
    PlusOutlined, SettingOutlined,
    SyncOutlined,
    UploadOutlined
} from "@ant-design/icons";

const {TextArea} = Input;

function ZksyncTasks() {
    const [batchProgress, setBatchProgress] = useState(0);
    const [batchLength, setBatchLength] = useState(0);
    const [batchloading, setBatchLoading] = useState(false);
    const [zkSyncConfigStore, setZkSyncConfigStore] = useState({});
    const [data, setData] = useState([]);
    const [isBatchModalVisible, setIsBatchModalVisible] = useState(false);
    const [isWalletModalVisible, setIsWalletModalVisible] = useState(false);
    const [batchForm] = Form.useForm();
    const [walletForm] = Form.useForm();
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [tableLoading, setTableLoading] = useState(false);
    const [taskContracts, setTaskContracts] = useState(new Map());
    const [taskData, setTaskData] = useState([]);
    const [initialized, setInitialized] = useState(false);
    const [tableHeight, setTableHeight] = useState(0);
    const [hideColumn, setHideColumn] = useState(false);

    const dmailContract = "0x981F198286E40F9979274E0876636E9144B8FB8E";
    const nameserviceContract = "0xAE23B6E7f91DDeBD3B70d74d20583E3e674Bd94f";
    const znsContract = "0xB235Cea7666d4379ca29e9Ad4ba2787e504192a8";
    const rollupContract = "0x5B91962F5ECa75E6558E4d32Df69B30f75cc6FE5";
    const zkswapContract = "0x18381c0f738146Fb694DE18D1106BdE2BE040Fa4";
    const openoceanContract = "0x36A1aCbbCAfca2468b85011DDD16E7Cb4d673230";
    const pancakeContract = "0xf8b59f3c3Ab33200ec80a8A58b2aA5F5D2a8944C";
    const ReactorFusionContract = "0xC5db68F30D21cBe0C9Eac7BE5eA83468d69297e6";
    const ReactorFusionContract2 = "0x04e9Db37d8EA0760072e1aCE3F2A219988Fdac29";
    const veloContract = "0xd999E16e68476bC749A28FC14a0c3b6d7073F50c";
    const veloContract2 = "0xf5E67261CB357eDb6C7719fEFAFaaB280cB5E2A6";
    const mavContract = "0x39e098a153ad69834a9dac32f0fca92066ad03f4";
    const veSyncContract = "0x6C31035D62541ceba2Ac587ea09891d1645D6D07";
    const izumiContract = "0x9606eC131EeC0F84c95D82c9a63959F2331cF2aC";
    const izumiContract2 = "0x943ac2310D9BC703d6AB5e5e76876e212100f894";
    const _1inchContract = "0x6e2B76966cbD9cF4cC2Fa0D76d24d5241E0ABC2F";
    const spacefiContract = "0xbE7D1FD1f6748bbDefC4fbaCafBb11C6Fc506d1d";
    const muteContract = "0x8B791913eB07C32779a16750e3868aA8495F5964";
    const syncSwapContract = "0x2da10a1e27bf85cedd8ffb1abbe97e53391c0295";
    const okxSwapContract = "0xb9061E38FeE7d30134F56aEf7117E2F6d1580666";
    const basiliskContract = "0x1e8F1099a3fe6D2c1A960528394F4fEB8f8A288D";
    const basiliskContract2 = "0x01541EaD71e41d59f315eB2cE3a9441eD7b0A63E";
    const zerolendContract = "0x767b4A087c11d7581Ac95eaFfc1FeBFA26bad3d2";

    const eraLendContract = "0x1BbD33384869b30A323e15868Ce46013C82B86FB";
    const eraLendContract2 = "0x1181D7BE04D80A8aE096641Ee1A87f7D557c6aeb";
    const eraLendContract3 = "0x90973213E2a230227BD7CCAfB30391F4a52439ee";
    const eraLendContract4 = "0x22D8b71599e14F20a49a397b88c1C878c86F5579";

    
    // const overNightContract = "0x84d05333f1F5Bf1358c3f63A113B1953C427925D";
    // const overNightContract2 = "0xA269031037B4D5fa3F771c401D19E57def6Cb491";
    // const ezkContract = "0x498f7bB59c61307De7dEA005877220e4406470e9";
    // const odosContract = "0xA269031037B4D5fa3F771c401D19E57def6Cb491";
    // const odosContract2 = "0x4bBa932E9792A2b917D47830C93a9BC79320E4f7";

    

    const toggleHideColumn = () => {
        setHideColumn(!hideColumn);
      };
    
    const getEyeIcon = () => {
    if (hideColumn) {
        return <EyeInvisibleOutlined />;
    }
    return <EyeOutlined />;
    };

    const initData = async () => {
        try {
            const newData = [...data];
            const promisesQueue = [];
            for (let item of newData) {
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, dmailContract);
                        item.dmail = result;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, nameserviceContract);
                        item.nameservice = result;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, znsContract);
                        item.zns = result;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, rollupContract);
                        item.rollup = result;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, zkswapContract);
                        item.zkswap = result;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, openoceanContract);
                        item.openocean = result;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, pancakeContract);
                        item.pancake = result;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result1 = checkTaskStatus(item.address, ReactorFusionContract);
                        const result2 = checkTaskStatus(item.address, ReactorFusionContract2);
                        item.rf = result1+result2;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result1 = checkTaskStatus(item.address, veloContract);
                        const result2 = checkTaskStatus(item.address, veloContract2);
                        item.velo = result1+result2;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, mavContract);
                        item.mav = result;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, veSyncContract);
                        item.veSync = result;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result1 = checkTaskStatus(item.address, izumiContract);
                        const result2 = checkTaskStatus(item.address, izumiContract2);
                        item.izumi = result1+result2;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, _1inchContract);
                        item._1inch = result;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, spacefiContract);
                        item.spacefi = result;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, muteContract);
                        item.mute = result;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, syncSwapContract);
                        item.sync = result;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, okxSwapContract);
                        item.okx = result;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, basiliskContract);
                        const result2 = checkTaskStatus(item.address, basiliskContract2);
                        item.basilisk = result + result2;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, zerolendContract);
                        item.zerolend = result;
                        resolve();
                    });
                });
                promisesQueue.push(() => {
                    return new Promise((resolve) => {
                        const result = checkTaskStatus(item.address, eraLendContract);
                        const result2 = checkTaskStatus(item.address, eraLendContract2);
                        const result3 = checkTaskStatus(item.address, eraLendContract3);
                        const result4 = checkTaskStatus(item.address, eraLendContract4);
                        item.eralend = result+result2+result3+result4;
                        resolve();
                    });
                });
                
            }
            await Promise.all(promisesQueue.map((promise) => promise()));
            setTaskData([...newData]);
            localStorage.setItem('addresses', JSON.stringify(newData));
        } catch (e) {
            console.error(e);
        }
        finally {
            setIsLoading(false);
        }
    }
    const handleRefresh = async () => {
        if (!selectedKeys.length) {
          notification.error({
            message: "错误",
            description: "请先选择要刷新的地址",
          }, 2);
          return;
        }
        setIsLoading(true);
        try {
          const newData = [...data];
          const promisesQueue = [];
          
            for (let key of selectedKeys) {
                const index = newData.findIndex(item => item.key === key);
                if (index !== -1) {
                    const item = newData[index];
                    const taskContractsMap = new Map();
                    const result = await getZksTasks(item.address);
                    const contractAddresses = result[0];
                    setTaskContracts(taskContractsMap);
                    await new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                        }, 200);
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, dmailContract);
                            item.dmail = result;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, nameserviceContract);
                            item.nameservice = result;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, znsContract);
                            item.zns = result;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, rollupContract);
                            item.rollup = result;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, zkswapContract);
                            item.zkswap = result;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, openoceanContract);
                            item.openocean = result;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, pancakeContract);
                            item.pancake = result;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result1 = checkTaskStatusByArray(item.address, ReactorFusionContract);
                            const result2 = checkTaskStatusByArray(item.address, ReactorFusionContract2);
                            item.rf = result1+result2;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result1 = checkTaskStatusByArray(item.address, veloContract);
                            const result2 = checkTaskStatusByArray(item.address, veloContract2);
                            item.velo = result1+result2;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, mavContract);
                            item.mav = result;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, veSyncContract);
                            item.veSync = result;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result1 = checkTaskStatusByArray(item.address, izumiContract);
                            const result2 = checkTaskStatusByArray(item.address, izumiContract2);
                            item.izumi = result1+result2;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, _1inchContract);
                            item._1inch = result;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, spacefiContract);
                            item.spacefi = result;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, muteContract);
                            item.mute = result;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, syncSwapContract);
                            item.sync = result;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, okxSwapContract);
                            item.okx = result;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, basiliskContract);
                            const result2 = checkTaskStatusByArray(item.address, basiliskContract2);
                            item.basilisk = result+result2;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, zerolendContract);
                            item.zerolend = result;
                            resolve();
                        });
                    });
                    promisesQueue.push(() => {
                        return new Promise((resolve) => {
                            const result = checkTaskStatusByArray(item.address, eraLendContract);
                            const result2 = checkTaskStatusByArray(item.address, eraLendContract2);
                            const result3 = checkTaskStatusByArray(item.address, eraLendContract3);
                            const result4 = checkTaskStatusByArray(item.address, eraLendContract4);
                            item.eralend = result+result2+result3+result4;
                            resolve();
                        });
                    });
                }
            }

          await Promise.all(promisesQueue.map(promise => promise()));
          
          setTaskData([...newData]);
          localStorage.setItem('addresses', JSON.stringify(newData));
          message.success("刷新成功");
        } catch (error) {
          notification.error({
            message: "错误",
            description: error.message,
          }, 2);
        } finally {
          setIsLoading(false);
          setSelectedKeys([]);
        }
      };
      

    const checkTaskStatus = (address, taskContract) => {
        taskContract = taskContract.toLowerCase();
        const contractAddresses = taskContracts.get(address);
        if (contractAddresses == undefined) {
            message.info("等待数据加载完成再刷新");
            return "error";
        }
        const count = contractAddresses.reduce((accumulator, contractAddress) => {
            if (contractAddress === taskContract) {
              return accumulator + 1;
            }
            return accumulator;
          }, 0);
          
          return count;
    };

    const checkTaskStatusByArray = (contractAddresses, taskContract) => {
        taskContract = taskContract.toLowerCase();
        const count = contractAddresses.reduce((accumulator, contractAddress) => {
            if (contractAddress === taskContract) {
                return accumulator + 1;
              }
              return accumulator;
            }, 0);
            
            return count;
      };

    useEffect(() => {
    const handleResize = () => {
        setTableHeight(window.innerHeight - 180); // 减去其他组件的高度，如页眉、页脚等
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);

    useEffect(() => {
        setTableLoading(true);
        const storedAddresses = localStorage.getItem('addresses');
        if (storedAddresses) {
            setData(JSON.parse(storedAddresses));
            setTaskData(JSON.parse(storedAddresses));
        }
        const fetchData = async () => {
            const parsedAddresses = JSON.parse(storedAddresses);
            if (!parsedAddresses) {
              return;
            }
            // 存储每个地址对应的合约数组到map中
            const taskContractsMap = new Map();
            let timestampsArray = [];
            const promises = []; // 存储所有的异步任务
          
            for (const entry of parsedAddresses) {
              const address = entry.address;
              const promise = getZksTasks(address)
                .then(result => {
                    taskContractsMap.set(address, result[0]);
                    timestampsArray.push(result[1]);
                })
                .catch(error => {
                  // 处理错误
                  console.error(`Error fetching tasks for address ${address}:`, error);
                });
          
              promises.push(promise);
            }
          
            try {
              await Promise.all(promises); // 等待所有的异步任务完成
              setTableLoading(false);
              setTaskContracts(taskContractsMap);
              const zks_timestamps = timestampsArray.flat()
              localStorage.setItem('zks_timestamps', JSON.stringify(zks_timestamps));
            } catch (error) {
              // 处理错误
              console.error('Error fetching task contracts:', error);
            }
          };
          
          fetchData();
          
    }, []);

    useEffect(() => {
        if (!initialized && data.length > 0 && taskContracts.size > 0) {
            initData()
            setInitialized(true); // 标记为已初始化
        }
      }, [data, taskContracts]);
   
    const rowSelection = {
        selectedRowKeys: selectedKeys,
        onChange: (selectedRowKeys) => {
            setSelectedKeys(selectedRowKeys);
        },
    };

    const [editingKey, setEditingKey] = useState(null);
    const columns = [
        {
            title: "#",
            key: "index",
            align: "center",
            render: (text, record, index) => index + 1,
            width: 34.5,
        },
        {
            title: "备注",
            dataIndex: "name",
            key: "name",
            align: "center",
            render: (text, record) => {
                const isEditing = record.key === editingKey;
                return isEditing ? (
                    <Input
                        placeholder="请输入备注"
                        defaultValue={text}
                        onPressEnter={(e) => {
                            record.name = e.target.value;
                            setData([...data]);
                            localStorage.setItem('addresses', JSON.stringify(data));
                            setEditingKey(null);
                        }}
                    />
                ) : (
                    <>
                        <Tag color="blue" onClick={() => setEditingKey(record.key)}>
                            {text}
                            </Tag>
                            {!text && (
                            <Button
                                shape="circle"
                                icon={<EditOutlined />}
                                size="small"
                                onClick={() => setEditingKey(record.key)}
                            />
                        )}
                    </>
                );
            },
            width: 120
        },
        {
            title: (
                <span>
                钱包地址
                    <span onClick={toggleHideColumn} style={{ marginLeft: 8, cursor: 'pointer' }}>
                        {getEyeIcon()}
                    </span>
                </span>
            ),
            dataIndex: "address",
            key: "address",
            align: "center",
            render: (text) => {
                if (hideColumn) {
                  return '***';
                }
                return text;
              },
            width: 200
        },{
            title: "最后交易",
            dataIndex: "zks2_last_tx",
            key: "zks2_last_tx",
            align: "center",
            render: (text, record) => {
                let textColor = "inherit";
              
                if (text === null) {
                  return <Spin />;
                } else if (text?.includes("天") && parseInt(text) > 7) {
                    textColor = "red";
                } else {
                  textColor = "#1677ff";
                }
              
                return (
                  <a
                    href={"https://explorer.zksync.io/address/" + record.address}
                    target={"_blank"}
                    style={{ color: textColor }}
                  >
                    {text}
                  </a>
                );
              },
            width: 80
        },
        {
            title: '进度',
            dataIndex: 'progress',
            key: 'progress',
            align: 'center',
            sorter: (a, b) => a.progress - b.progress,
            render: (text, record) => {
              const items = ['dmail', 'nameservice', 'zns', 'rollup', 'zkswap', 'openocean', 'pancake', 'rf', 
              'velo', 'mav', 'veSync', 'izumi', '_1inch', 'spacefi', 'mute', 'sync', 'okx', 'basilisk', 'zerolend', 'eralend']; 
              const count = items.reduce((total, item) => {
                if (record[item] > 0) {
                  return total + 1;
                }
                return total;
              }, 0);
              const percentage = (count / items.length) * 100;
              record.progress = percentage;
        
              const backgroundColor = `rgba(240, 121, 78, ${percentage / 100})`;
        
              return {
                children: <span>{text === null ? <Spin /> : `${percentage.toFixed(2)}%`}</span>,
                props: {
                  style: {
                    background: backgroundColor,
                  },
                },
              };
            },
            width: 60,
          },
        {
            title: <a href="https://defillama.com/chain/zkSync Era" style={{ color: 'white' }} 
                target="_blank" rel="noopener noreferrer">zkSyncEra Task List  [参考defillama TVL数据] <br/></a>,
            key: "zks_era_group",
            className: "zks_era",
            children: [
                {
                    title: <a href="https://app.eralend.com/" target="_blank" rel="noopener noreferrer">EraLend</a>,
                    dataIndex: "eralend",
                    key: "eralend",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.eralend === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://app.zerolend.xyz/markets/" target="_blank" rel="noopener noreferrer">ZeroLend</a>,
                    dataIndex: "zerolend",
                    key: "zerolend",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.zerolend === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://app.basilisk.org/" target="_blank" rel="noopener noreferrer">basilisk</a>,
                    dataIndex: "basilisk",
                    key: "basilisk",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.basilisk === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://www.okx.com/cn/web3/dex" target="_blank" rel="noopener noreferrer">OKX</a>,
                    dataIndex: "okx",
                    key: "okx",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.okx === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://syncswap.xyz" target="_blank" rel="noopener noreferrer">SyncSwap</a>,
                    dataIndex: "sync",
                    key: "sync",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.sync === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://app.mute.io/swap" target="_blank" rel="noopener noreferrer">Mute</a>,
                    dataIndex: "mute",
                    key: "mute",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.mute === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://swap-zksync.spacefi.io/#/swap" target="_blank" rel="noopener noreferrer">SpaceFi</a>,
                    dataIndex: "spacefi",
                    key: "spacefi",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.spacefi === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://app.1inch.io" target="_blank" rel="noopener noreferrer">1inch</a>,
                    dataIndex: "_1inch",
                    key: "_1inch",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record._1inch === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://izumi.finance/trade/swap" target="_blank" rel="noopener noreferrer">izumi</a>,
                    dataIndex: "izumi",
                    key: "izumi",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.izumi === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://app.vesync.finance/swap" target="_blank" rel="noopener noreferrer">veSync</a>,
                    dataIndex: "veSync",
                    key: "veSync",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.veSync === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://app.mav.xyz/?chain=324" target="_blank" rel="noopener noreferrer">Mav</a>,
                    dataIndex: "mav",
                    key: "mav",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.mav === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://zksync.velocore.xyz/swap" target="_blank" rel="noopener noreferrer">Velocore</a>,
                    dataIndex: "velo",
                    key: "velo",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.velo === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://app.reactorfusion.xyz/" target="_blank" rel="noopener noreferrer">Reactor</a>,
                    dataIndex: "rf",
                    key: "rf",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.rf === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://pancakeswap.finance/swap?chain=zkSync" target="_blank" rel="noopener noreferrer">PancakeSwap</a>,
                    dataIndex: "pancake",
                    key: "pancake",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.pancake === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://app.openocean.finance/CLASSIC#/ZKSYNC/ETH/USDC" target="_blank" rel="noopener noreferrer">OpenOcean</a>,
                    dataIndex: "openocean",
                    key: "openocean",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.openocean === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://zkswap.finance/" target="_blank" rel="noopener noreferrer">zkSwap</a>,
                    dataIndex: "zkswap",
                    key: "zkswap",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.zkswap === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://app.rollup.finance/#/stake" target="_blank" rel="noopener noreferrer">Rollup</a>,
                    dataIndex: "rollup",
                    key: "rollup",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.rollup === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://zns.is/" target="_blank" rel="noopener noreferrer">zns</a>,
                    dataIndex: "zns",
                    key: "zns",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.zns === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://zkns.domains/" target="_blank" rel="noopener noreferrer">NameService</a>,
                    dataIndex: "nameservice",
                    key: "nameservice",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.zns === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                {
                    title: <a href="https://mail.dmail.ai/presale/395788" target="_blank" rel="noopener noreferrer">dmail</a>,
                    dataIndex: "dmail",
                    key: "dmail",
                    align: "center",
                    filters: [
                        {
                          text: '未完成',
                          value: 0,
                        }
                    ],
                    onFilter: (value, record) => record.dmail === value,
                    render: (text, record) => (
                        <span style={{ color: text === 0 ? 'red' : 'inherit' }}>
                            {text === null ? <Spin /> : text}
                        </span>
                    ),
                    width: 100
                },
                
            ],
        }
    ];

    return (
        <div>
            <Content>
                <Spin spinning={tableLoading}>
                    <Table
                        rowSelection={rowSelection}
                        dataSource={taskData}
                        pagination={false}
                        bordered={true}
                        style={{marginBottom: "0px", zIndex: 2}}
                        size={"small"}
                        columns={columns}
                        scroll={{
                            y: tableHeight
                          }}
                        footer={() => (
                            <Card>
                                <div style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    gap: '10px'
                                }}>
                                    <Button type="primary" onClick={handleRefresh} loading={isLoading}
                                            size={"large"}
                                            style={{width: "20%"}} icon={<SyncOutlined/>}>
                                        {isLoading ? "正在刷新" : "刷新选中地址"}
                                    </Button>
                                </div>
                            </Card>
                        )
                        }
                    />
                </Spin>
            </Content>
        </div>
    );
}

export default ZksyncTasks;
