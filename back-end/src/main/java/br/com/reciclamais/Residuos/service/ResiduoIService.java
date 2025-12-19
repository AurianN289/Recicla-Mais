package br.com.reciclamais.Residuos.service;

import br.com.reciclamais.Residuos.entity.Residuo;

import java.util.List;

public interface ResiduoIService {

    void save(Residuo residuo) throws RuntimeException;

    List<Residuo> findAll() throws RuntimeException;
}
