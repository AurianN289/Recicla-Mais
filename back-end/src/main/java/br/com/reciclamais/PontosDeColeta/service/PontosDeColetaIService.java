package br.com.reciclamais.PontosColeta.service;

import br.com.reciclamais.PontosColeta.entity.PontoColeta;

import java.util.List;

public interface PontoColetaIService {

    void save(PontoColeta pontoColeta) throws RuntimeException;

    List<PontoColeta> findAll() throws RuntimeException;
}
