import React, { Component, useEffect, useRef, useState } from "react";
import style from "./style.header.module.scss";
import header from "../../assets/header.png";
import pizza from "../../assets/pizza.png";
import { Input } from "antd";
import { Modal, Button , Radio , Checkbox , Row , InputNumber , Form ,Select} from "antd";

const MainHeader = () => {
    const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRecieptModalVisible, setIsRecieptModalVisible] = useState(false);
  const [isDiscountModalVisible, setIsDiscountModalVisible] = useState(false);
  const [isOrderedModalVisible, setIsOrderedModalVisible] = useState(false);
  const [pizzaName, setPizzaName] = useState("");
  const DisCode = useRef("");
  const [total, setTotal] = useState(0);
  const [codeInput, setCodeInput] = useState("");
  const [code, setCode] = useState("");
  const [discountBtnDisable, setDiscountBtnDisable] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [disable, setDisable] = useState(true);
  const [extra1 , setExtra1]=useState(false)
  const [extra2 , setExtra2]=useState(false)
  const [extra3 , setExtra3]=useState(false)

  const Edit = () => {
    setIsModalVisible(true)
    setIsRecieptModalVisible(false)
    setDiscountBtnDisable(false)
    setExtra1(false)
    setExtra2(false)
    setExtra3(false)
  };

  const itemEvent = (event) => {
setCodeInput(event.target.value);
  };

  const discount = (val) => {
    setIsDiscountModalVisible(true)
    val == 10 ? setCode("ABC1") : (val == 20) ? setCode("ABC2") :setCode('') 
  };

  const enter = () => {
    setIsDiscountModalVisible(false);
    setIsRecieptModalVisible(true)
    if (codeInput == code) {
        code == "ABC1" ? setTotal(total - (10 / 100) * total) : code == "ABC2" ? setTotal(total - (20 / 100) * total) : setTotal(total)
        setDiscountBtnDisable(true)
    }
  };

  const showModal = (Name) => {
    setIsModalVisible(true)
    setPizzaName(Name)
    setDisable(true)
    form.setFieldsValue({
        quantity : 1
    })
  };

  const handleCancel=()=>{
    setIsRecieptModalVisible(false);
    setIsDiscountModalVisible(false)
    setIsOrderedModalVisible(false)
    setIsModalVisible(false);
    setDiscountBtnDisable(false)
    setExtra1(false)
    setExtra2(false)
    setExtra3(false)
    form.resetFields()
  }

  const allData = (values2) =>{

    let TotalAmount
    setIsRecieptModalVisible(true)
    setIsModalVisible(false)
    setQuantity(values2['quantity'])
    TotalAmount = values2['pizzaType'] * values2['quantity'] 

    if(values2['extras'] != undefined){
    values2['extras'].forEach(element => {
        TotalAmount = TotalAmount + element 
        if(element == 50 ){
            setExtra1(true)
        }
        if(element == 200 ){
            setExtra2(true)
        }
        if(element == 100 ){
            setExtra3(true)
        }
    }); 
}
    setTotal(TotalAmount)
  }
  return (
    <>
      <div className={style.header}>
        <img src={header} className={style.headerImg} />
      </div>

      <h1 className={style.headerHeading}>Enjoy The deals </h1>
      <div className={style.PizzaCardsDiv}>
        <div className={style.pizzaCard}>
          <img src={pizza} className={style.pizzaImg} />
          <h2>Greek Pizza</h2>
          <p className={style.priceTag}>Rs 600 - 1000</p>
          <hr className={style.hrTag} />
          <button
            className={style.orderBtn}
            onClick={() => showModal("Greek Pizza")}
          >
            Order Now
          </button>
        </div>
        <div className={style.pizzaCard}>
          <img src={pizza} className={style.pizzaImg} />
          <h2>Chicago Pizza</h2>
          <p className={style.priceTag}>Rs 600 - 1000</p>
          <hr className={style.hrTag} />
          <button
            className={style.orderBtn}
            onClick={() => showModal("Chicago Pizza")}
          >
            Order Now
          </button>
        </div>
        <div className={style.pizzaCard}>
          <img src={pizza} className={style.pizzaImg} />
          <h2>California Pizza</h2>
          <p className={style.priceTag}>Rs 600 - 1000</p>
          <hr className={style.hrTag} />
          <button
            className={style.orderBtn}
            onClick={() => showModal("California Pizza")}
          >
            Order Now
          </button>
        </div>
      </div>

      <Modal
        title={pizzaName}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="modal"
      >
      <Form form={form} onFinish={allData}>
          <Form.Item name='pizzaType'>
          <Radio.Group >
            <Radio value={600} onClick={()=>setDisable(false)}>
              Regular <span className={style.priceSpan}>(Rs 600)</span>
            </Radio>
            
            <Radio value={800} onClick={()=>setDisable(false)} >
              Medium <span className={style.priceSpan}>(Rs 800)</span>
            </Radio>
            <Radio value={1000} onClick={()=>setDisable(false)}>
              Large <span className={style.priceSpan}>(Rs 1000)</span>
            </Radio>
          </Radio.Group>
          </Form.Item>
          <Form.Item name='extras'>
          <Checkbox.Group style={{ width: "100%" }} >
            <Row>
              <Checkbox value={50} >
                Extra Cheese <span className={style.ExtraPrice}>(Rs 50)</span>
              </Checkbox>
            </Row>
            <Row>
              <Checkbox value={200}>
                Extra Chicken <span className={style.ExtraPrice}>(Rs 200)</span>
              </Checkbox>
            </Row>
            <Row>
              <Checkbox value={100}>
                Extra Mayo <span className={style.ExtraPrice}>(Rs 100)</span>
              </Checkbox>
            </Row>
          </Checkbox.Group>
          </Form.Item>
    <Form.Item label='Quantity' name='quantity' value={quantity}>
            <InputNumber
              min={1}
              max={10}
            />
          
    </Form.Item>
        <Form.Item>
        <Button
              type="success"
              shape="round"
              disabled={disable}
              id="receiptBtn"
              htmlType="submit"
            >
              Receipt
            </Button>

        </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={pizzaName}
        visible={isRecieptModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <h1>Order Receipt</h1>
        <h3>Pizza : {pizzaName}</h3>
        <h3>Quantity : {quantity}X</h3>
        <h3>Extra Cheese : {extra1 ? "Yes (Rs : 50)" : "No"}</h3>
        <h3>Extra Chicken : {extra2 ? "Yes (Rs : 200)" : "No"}</h3>
        <h3>Extra Mayo : {extra3 ? "Yes (Rs : 100)" : "No"}</h3>
        <h3>Total : {total}</h3>
        <Button type="primary" size="10" onClick={Edit}>
          Edit
        </Button>
        <br/><br/>
        <Button type="primary" size="10" onClick={() => discount(10)} disabled={discountBtnDisable}>
            10% Discount
          </Button>
          <span> </span>
          <Button type="primary" size="10" onClick={() => discount(20)} disabled={discountBtnDisable}>
            20% Discount
          </Button>

        <div className={style.orderNowbtnDiv}>
          <Button type="success" shape="round" onClick={()=> {setIsRecieptModalVisible(false);setIsOrderedModalVisible(true)}}>
            Order Now
          </Button>
        </div>
      </Modal>

      <Modal
        title={pizzaName}
        visible={isDiscountModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <div id="codeSection">
          <h2>
            Discount Code: (Your Discount code is <span>{code}</span>)
          </h2>
          <Input
            size="large"
            placeholder="Enter Code"
            ref={DisCode}
            onChange={itemEvent}
          />
          <br />
          <br />
          <Button type="primary" size="10" onClick={enter}>
            Enter
          </Button>
        </div>
      </Modal>

      <Modal
        title={pizzaName}
        visible={isOrderedModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <h1>Your Order has been PLACED !!!</h1>
      </Modal>
    </>
  );
};

export default MainHeader;
