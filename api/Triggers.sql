
  CREATE TABLE "SYSTEM"."ERROR_PROCESO" 
   (	"ID" NUMBER NOT NULL ENABLE, 
	"ERROR" VARCHAR2(200 BYTE) NOT NULL ENABLE, 
	"TYPE" VARCHAR2(200 BYTE), 
	 CONSTRAINT "ERROR_PROCESO_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;


create or replace procedure SP_UPDATE_STOCK
(p_idprep number)
is

v_stock_gastado     ingredientepreparacion_ing89fb.CANTIDAD_INGREDIENTE%TYPE;
v_cod_error         NUMBER;
v_mens_err          VARCHAR2(200);
BEGIN
for i in (select * from preparaciones_preparacion) LOOP
    if i.id= p_idprep then
        for e in (select * from ingredientepreparacion_ing89fb) loop
            if e.preparacion_id = i.id then
            
                    update BODEGA_PRODUCTO SET stock_actual = stock_actual - e.cantidad_ingrediente
                    where BODEGA_PRODUCTO.id = e.ingrediente_id;
               
            end if;
        end loop;
    end if;
END LOOP;

    EXCEPTiON
        WHEN OTHERS THEN
        v_cod_error :=SQLCODE;
        v_mens_err :=sqlerrm;
        INSERT INTO error_proceso
        VALUES(seq_error_proceso.nextval,'ERROR AL ACTUALIZAR STOCK PRODUCTOS sp',v_cod_error||' '||v_mens_err);

END;


create or replace TRIGGER TR_UPDATE_PRODUCTSTOCK after insert on PEDIDOS_PEDIDOS 
for each row
Declare



v_stock_gastado     ingredientepreparacion_ing89fb.CANTIDAD_INGREDIENTE%TYPE;
v_cod_error         NUMBER;
v_mens_err          VARCHAR2(200);
v_id                NUMBER;
BEGIN
v_id := :new.preparacion_id;
SP_UPDATE_STOCK(v_id);
SP_UPDATE_STOCKPREP(v_id);

    EXCEPTiON
        WHEN OTHERS THEN
        v_cod_error :=SQLCODE;
        v_mens_err :=sqlerrm;
        INSERT INTO error_proceso
        VALUES(seq_error_proceso.nextval,'ERROR AL ACTUALIZAR STOCK PRODUCTOS',v_cod_error||' '||v_mens_err);

END;

create or replace NONEDITIONABLE procedure SP_UPDATE_STOCKPREP 
(p_idprep number)
is

v_stock             preparaciones_preparacion.stock%type;
v_cod_error         NUMBER;
v_mens_err          VARCHAR2(200);

begin
select min(trunc(stock_actual/cantidad_ingrediente)) into v_stock
from preparaciones_preparacion left join ingredientepreparacion_ing89fb on ingredientepreparacion_ing89fb.preparacion_id = preparaciones_preparacion.id left join bodega_producto on bodega_producto.id = ingredientepreparacion_ing89fb.ingrediente_id
where preparaciones_preparacion.id = p_idprep
group by preparaciones_preparacion.id;

 update preparaciones_preparacion SET stock = v_stock
                    where preparaciones_preparacion.id = p_idprep;

    EXCEPTION
    WHEN OTHERS THEN
        v_cod_error :=SQLCODE;
        v_mens_err :=sqlerrm;
        INSERT INTO error_proceso
        VALUES(seq_error_proceso.nextval,'ERROR AL ACTUALIZAR STOCK PRODUCTOS sp',v_cod_error||' '||v_mens_err);
end;

create or replace NONEDITIONABLE TRIGGER TR_PAGO_PEDIDO after insert on finanzas_pago 
for each row
Declare



v_stock_gastado     ingredientepreparacion_ing89fb.CANTIDAD_INGREDIENTE%TYPE;
v_cod_error         NUMBER;
v_mens_err          VARCHAR2(200);
v_id                NUMBER;
BEGIN
insert into finanzas_finanzas (TIPO,MONTO,FECHA,DETALLE) values('INGRESO',:new.TOTAL_PAGO,:new.CREATED_AT,'Pago Correspondiente a pedido: '||:new.id||' con fecha: '||:new.CREATED_AT);

    EXCEPTiON
        WHEN OTHERS THEN
        v_cod_error :=SQLCODE;
        v_mens_err :=sqlerrm;
        INSERT INTO error_proceso
        VALUES(seq_error_proceso.nextval,'ERROR AL insertar pago',v_cod_error||' '||v_mens_err);
END;