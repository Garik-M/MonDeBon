import { useEffect, useRef, useState } from "react";
import styles from "@components/Services/Services.module.scss";
import type { ServicesData } from "@/types";
import Dragger from "../Dragger";
import { useMediaQuery } from "react-responsive";
import Dropper from "../Dropper";
import Modal from "../Modal";

type Props = {
  data: ServicesData[];
  setData: React.Dispatch<React.SetStateAction<ServicesData[]>>;
};
const Services = ({ data }: Props) => {
  const [selected, setSelected] = useState<ServicesData[]>([]);
  const [part, setPart] = useState<number>(0);
  const [selectsPart, setSelectsPart] = useState<number>(0);
  const [modal, setModal] = useState<ServicesData>();
  const [visible, setVisible] = useState<boolean>(false);

  const isMobile = useMediaQuery({ maxWidth: 650 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.1,
      }
    );
    

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(t);
  }, [visible]);

  const totalPrice = selected.reduce((aggr, obj) => {
    return aggr + (obj.price ?? 0);
  }, 0);

  const handleServiceClick = (service: ServicesData) => {
    setModal(service);
  };

  const handlePageSelect = (val: number) => {
    setPart((val - 1) * (isMobile ? 5 : 9));
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.dataTransfer.setData("serviceId", id.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = Number(e.dataTransfer.getData("serviceId"));
    const service = data.find((service) => service.id === id);
    service!.disabled = true;

    if (service && !selected.some((s) => s.id === id)) {
      setSelected((prev) => [...prev, service]);
    }
  };

  const handleDropBack = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const id = Number(e.dataTransfer.getData("serviceId"));
    const service = selected.find((s) => s.id === id);
    service!.disabled = false;

    if (service) {
      setSelected(selected.filter((s) => s.id !== id));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleServicesListChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (
      e.currentTarget ===
      e.currentTarget.ownerDocument.querySelector('div[data-dir="left"]')
    ) {
      if (part > 0) {
        setPart(part - (isMobile ? 5 : 9));
      }
    } else {
      if (part + (isMobile ? 5 : 9) < data.length) {
        setPart(part + (isMobile ? 5 : 9));
      }
    }
  };

  const handleSelectedsListChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (
      e.currentTarget ===
      e.currentTarget.ownerDocument.querySelector(
        'div[data-selectedsdir="left"]'
      )
    ) {
      if (selectsPart > 0) {
        setSelectsPart(selectsPart - (isMobile ? 5 : 10));
      }
    } else {
      if (selectsPart + (isMobile ? 5 : 10) < selected.length) {
        setSelectsPart(selectsPart + (isMobile ? 5 : 10));
      }
    }
  };

  return (
    <section className={`${styles.services} container`} id="Services">
      <div className={styles.main}>
        <div
          ref={ref}
          className={`${styles.info} ${visible ? styles.show : styles.hide}`}
        >
          Ընտրեք ծառայությունները և հավաքեք Ձեր միջոցառման փաթեթը
        </div>
        <Modal
          modal={modal}
          setModal={setModal}
          setSelected={setSelected}
          selected={selected}
        />
        <div className={styles.tagline}>
          <div>Ծառայությունների ցանկ</div>
        </div>
        <div className={styles.wrapper}>
          <Dragger
            data={data}
            part={part}
            handleDropBack={handleDropBack}
            handleDragOver={handleDragOver}
            handleServicesListChange={handleServicesListChange}
            handleDragStart={handleDragStart}
            handlePageSelect={handlePageSelect}
            handleServiceClick={handleServiceClick}
          />

          <Dropper
            selected={selected}
            handleDrop={handleDrop}
            selectsPart={selectsPart}
            handleDragOver={handleDragOver}
            handleDragStart={handleDragStart}
            handleSelectedsListChange={handleSelectedsListChange}
            handleServiceClick={handleServiceClick}
          />
        </div>
        <div className={styles.total}>
          <div>Ընդհանուր: {totalPrice} դրամ</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
